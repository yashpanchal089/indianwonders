/**
 * Vercel Serverless Function & Express API Handler
 * Indian Wonders & Columbus Travels & Services Pvt. Ltd.
 * Established 1984 | Approved by Dept. of Tourism, Govt. of India | IATA Accredited
 */

const express = require('express');
const cors = require('cors');

const {
  SUBCATEGORIES,
  TOURS_DATA,
  SPECIALIZED_SERVICES,
  CURRENCY_RATES,
  COMPANY_CREDENTIALS
} = require('../js/tours-data.js');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
    results = results.filter(pkg => pkg.category === category);
  }

  if (destination && destination !== 'all') {
    results = results.filter(pkg => pkg.destination.toLowerCase().includes(destination.toLowerCase()));
  }

  if (search) {
    const q = search.toLowerCase();
    results = results.filter(pkg => 
      pkg.title.toLowerCase().includes(q) ||
      pkg.subtitle.toLowerCase().includes(q) ||
      pkg.destination.toLowerCase().includes(q) ||
      pkg.highlights.some(h => h.toLowerCase().includes(q))
    );
  }

  if (maxPrice) {
    results = results.filter(pkg => pkg.priceINR <= Number(maxPrice));
  }

  res.json({
    status: 'success',
    count: results.length,
    data: results
  });
});

// 4. Get Single Package by ID
app.get('/api/packages/:id', (req, res) => {
  const tour = TOURS_DATA.find(pkg => pkg.id === req.params.id);

  if (!tour) {
    return res.status(404).json({
      status: 'error',
      message: `Tour package with ID '${req.params.id}' was not found.`
    });
  }

  res.json({
    status: 'success',
    data: tour
  });
});

// 5. Get Real-time Currency Exchange Rates
app.get('/api/currencies', (req, res) => {
  res.json({
    status: 'success',
    base: 'INR',
    updatedAt: new Date().toISOString(),
    data: CURRENCY_RATES
  });
});

// 6. Get Specialized Services (IATA, Fleet, Medical, Visas)
app.get('/api/services', (req, res) => {
  res.json({
    status: 'success',
    count: SPECIALIZED_SERVICES.length,
    data: SPECIALIZED_SERVICES
  });
});

// 7. Post Booking / Custom Inquiry
app.post('/api/inquiry', (req, res) => {
  const { name, email, phone, packageId, travelers, date, notes } = req.body;

  if (!name || !phone) {
    return res.status(400).json({
      status: 'error',
      message: 'Name and contact phone number are required.'
    });
  }

  const inquiryRecord = {
    id: `IW-INQ-${Date.now().toString().slice(-6)}`,
    timestamp: new Date().toISOString(),
    name,
    email: email || 'Not provided',
    phone,
    packageId: packageId || 'General Inquiry',
    travelers: travelers || 2,
    date: date || 'Flexible',
    notes: notes || 'No additional notes'
  };

  inquiriesLog.push(inquiryRecord);

  res.status(201).json({
    status: 'success',
    message: 'Your inquiry has been received by our Kandivali West headquarters. An expert concierge will contact you within 2 business hours.',
    data: inquiryRecord
  });
});

// 8. Post Bespoke Custom Trip Architect Request
app.post('/api/custom-trip', (req, res) => {
  const {
    destination,
    style,
    tier,
    durationDays,
    adults,
    children,
    month,
    guestName,
    guestPhone,
    guestEmail,
    notes,
    estimatedCostINR
  } = req.body;

  if (!guestName || !guestPhone) {
    return res.status(400).json({
      status: 'error',
      message: 'Guest name and phone number are required to generate your custom itinerary blueprint.'
    });
  }

  const customRefId = `IW-TRIP-${Date.now().toString().slice(-6)}`;
  const tripRecord = {
    referenceId: customRefId,
    timestamp: new Date().toISOString(),
    destination,
    style,
    tier,
    durationDays: Number(durationDays) || 8,
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

  res.status(201).json({
    status: 'success',
    message: 'Bespoke itinerary blueprint submitted successfully. Our senior travel architect will draft your personalized schedule.',
    referenceId: customRefId,
    data: tripRecord
  });
});

module.exports = app;
