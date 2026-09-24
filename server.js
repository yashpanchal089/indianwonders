/**
 * Express Backend API Server
 * Indian Wonders & Columbus Travels & Services Pvt. Ltd.
 * Established 1984 | Approved by Dept. of Tourism, Govt. of India | IATA Accredited
 */

const express = require('express');
const path = require('path');
const cors = require('cors');

const {
  SUBCATEGORIES,
  TOURS_DATA,
  SPECIALIZED_SERVICES,
  CURRENCY_RATES,
  COMPANY_CREDENTIALS
} = require('./js/tours-data.js');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static frontend files
app.use(express.static(path.join(__dirname)));

// In-memory inquiries store
const inquiriesLog = [];
const customTripsLog = [];

// ==========================================
// REST API ENDPOINTS
// ==========================================

// 1. Get Company Credentials
app.get('/api/credentials', (req, res) => {
  res.json({
    status: 'success',
    data: COMPANY_CREDENTIALS
  });
});

// 2. Get Subcategories
app.get('/api/subcategories', (req, res) => {
  res.json({
    status: 'success',
    data: SUBCATEGORIES
  });
});

// 3. Get Packages with Filters
app.get('/api/packages', (req, res) => {
  const { subCategory, category, destination, search, maxPrice } = req.query;
  let results = [...TOURS_DATA];

  if (subCategory && subCategory !== 'all') {
    results = results.filter(pkg => pkg.subCategory === subCategory || pkg.category === subCategory);
  }

  if (category && category !== 'all') {
    results = results.filter(pkg => pkg.category === category || pkg.subCategory === category);
  }

  if (destination && destination !== 'all') {
    results = results.filter(pkg => 
      pkg.destination.toLowerCase().includes(destination.toLowerCase()) ||
      pkg.route.some(r => r.toLowerCase().includes(destination.toLowerCase()))
    );
  }

  if (search) {
    const q = search.toLowerCase();
    results = results.filter(pkg =>
      pkg.title.toLowerCase().includes(q) ||
      pkg.subtitle.toLowerCase().includes(q) ||
      pkg.overview.toLowerCase().includes(q) ||
      pkg.route.some(r => r.toLowerCase().includes(q))
    );
  }

  if (maxPrice && !isNaN(Number(maxPrice))) {
    results = results.filter(pkg => pkg.basePriceINR <= Number(maxPrice));
  }

  res.json({
    status: 'success',
    count: results.length,
    data: results
  });
});

// 4. Get Single Package by ID or Slug
app.get('/api/packages/:id', (req, res) => {
  const { id } = req.params;
  const pkg = TOURS_DATA.find(p => p.id === id || p.slug === id);

  if (!pkg) {
    return res.status(404).json({
      status: 'error',
      message: `Package '${id}' not found in catalogue.`
    });
  }

  res.json({
    status: 'success',
    data: pkg
  });
});

// 5. Get Specialized Services
app.get('/api/services', (req, res) => {
  res.json({
    status: 'success',
    data: SPECIALIZED_SERVICES
  });
});

// 6. Get Currency Exchange Rates
app.get('/api/currencies', (req, res) => {
  res.json({
    status: 'success',
    data: CURRENCY_RATES
  });
});

// 7. Submit Package Inquiry
app.post('/api/inquiry', (req, res) => {
  const { packageId, name, email, phone, travelDate, guests, message, currency } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({
      status: 'error',
      message: 'Name, email, and phone number are required.'
    });
  }

  const selectedTour = TOURS_DATA.find(t => t.id === packageId);
  const referenceId = 'IW-' + Date.now().toString(36).toUpperCase();

  const inquiryRecord = {
    referenceId,
    timestamp: new Date().toISOString(),
    packageId: packageId || 'general',
    packageTitle: selectedTour ? selectedTour.title : 'General Bespoke Consultation',
    name,
    email,
    phone,
    travelDate: travelDate || 'Flexible',
    guests: guests || 2,
    message: message || '',
    currency: currency || 'INR'
  };

  inquiriesLog.push(inquiryRecord);

  console.log(`[New Inquiry Received] Reference: ${referenceId} from ${name} (${phone}) for ${inquiryRecord.packageTitle}`);

  res.status(201).json({
    status: 'success',
    message: 'Your inquiry has been logged with Columbus Travels & Services Pvt. Ltd. concierge desk. Our IATA specialist will contact you within 4 hours.',
    referenceId,
    data: inquiryRecord
  });
});

// 8. Submit Bespoke Custom Trip Architect Request
app.post('/api/custom-trip', (req, res) => {
  const {
    destination,
    style,
    tier,
    adults,
    children,
    month,
    guestName,
    guestPhone,
    guestEmail,
    notes,
    estimatedCostINR
  } = req.body;

  if (!guestName || !guestPhone || !guestEmail) {
    return res.status(400).json({
      status: 'error',
      message: 'Guest name, phone, and email are mandatory.'
    });
  }

  const customRefId = 'BESPOKE-' + Math.random().toString(36).substring(2, 8).toUpperCase();

  const tripRecord = {
    referenceId: customRefId,
    timestamp: new Date().toISOString(),
    destination,
    style,
    tier,
    adults: Number(adults) || 2,
    children: Number(children) || 0,
    month,
    guestName,
    guestPhone,
    guestEmail,
    notes,
    estimatedCostINR: estimatedCostINR || 150000
  };

  customTripsLog.push(tripRecord);

  console.log(`[Custom Trip Architect Request] Ref: ${customRefId} by ${guestName} to ${destination}`);

  res.status(201).json({
    status: 'success',
    message: 'Bespoke itinerary blueprint submitted successfully. Our senior travel architect will draft your personalized schedule.',
    referenceId: customRefId,
    data: tripRecord
  });
});

// HTML Page Route Handlers for Clean URLs
app.get('/packages', (req, res) => {
  res.sendFile(path.join(__dirname, 'packages.html'));
});

app.get('/package-detail', (req, res) => {
  res.sendFile(path.join(__dirname, 'package-detail.html'));
});

app.get('/custom-tour', (req, res) => {
  res.sendFile(path.join(__dirname, 'custom-tour.html'));
});

app.get('/services', (req, res) => {
  res.sendFile(path.join(__dirname, 'services.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'contact.html'));
});

// Fallback to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start Server
app.listen(PORT, () => {
  console.log(`=======================================================`);
  console.log(` Indian Wonders & Columbus Travels Server Running!`);
  console.log(` Established 1984 | Approved by Dept. of Tourism, Govt. of India`);
  console.log(` Local URL: http://localhost:${PORT}`);
  console.log(`=======================================================`);
});
