/**
 * Indian Wonders & Columbus Travels & Services Pvt. Ltd.
 * Production & Vercel Universal Server
 * Established 1984 | Approved by Dept. of Tourism, Govt. of India | IATA Accredited
 */

const express = require('express');
const path = require('path');
const fs = require('fs');
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

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 1. Explicit Core Asset Routes with guaranteed MIME types
app.get('/css/styles.css', (req, res) => {
  try {
    const cssPath = path.join(__dirname, 'css', 'styles.css');
    if (fs.existsSync(cssPath)) {
      res.setHeader('Content-Type', 'text/css; charset=utf-8');
      return res.sendFile(cssPath);
    }
  } catch (e) {}
  res.status(404).send('CSS not found');
});

app.get('/js/app.js', (req, res) => {
  try {
    const jsPath = path.join(__dirname, 'js', 'app.js');
    if (fs.existsSync(jsPath)) {
      res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
      return res.sendFile(jsPath);
    }
  } catch (e) {}
  res.status(404).send('JS not found');
});

app.get('/js/tours-data.js', (req, res) => {
  try {
    const dataPath = path.join(__dirname, 'js', 'tours-data.js');
    if (fs.existsSync(dataPath)) {
      res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
      return res.sendFile(dataPath);
    }
  } catch (e) {}
  res.status(404).send('Tours data not found');
});

// 2. Static directory middleware for assets, css, js
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use(express.static(path.join(__dirname)));

// 3. REST API Endpoints
app.get('/api/credentials', (req, res) => res.json({ status: 'success', data: COMPANY_CREDENTIALS }));
app.get('/api/subcategories', (req, res) => res.json({ status: 'success', data: SUBCATEGORIES }));
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
      pkg.destination.toLowerCase().includes(q)
    );
  }
  if (maxPrice) {
    results = results.filter(pkg => pkg.priceINR <= Number(maxPrice));
  }
  res.json({ status: 'success', count: results.length, data: results });
});
app.get('/api/packages/:id', (req, res) => {
  const tour = TOURS_DATA.find(pkg => pkg.id === req.params.id);
  if (!tour) return res.status(404).json({ status: 'error', message: 'Tour package not found' });
  res.json({ status: 'success', data: tour });
});
app.get('/api/currencies', (req, res) => res.json({ status: 'success', data: CURRENCY_RATES }));
app.get('/api/services', (req, res) => res.json({ status: 'success', data: SPECIALIZED_SERVICES }));

// 4. HTML Page Routes (Clean URLs and .html URLs)
app.get(['/', '/index', '/index.html'], (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get(['/packages', '/packages.html'], (req, res) => {
  res.sendFile(path.join(__dirname, 'packages.html'));
});

app.get(['/package-detail', '/package-detail.html'], (req, res) => {
  res.sendFile(path.join(__dirname, 'package-detail.html'));
});

app.get(['/custom-tour', '/custom-tour.html'], (req, res) => {
  res.sendFile(path.join(__dirname, 'custom-tour.html'));
});

app.get(['/services', '/services.html'], (req, res) => {
  res.sendFile(path.join(__dirname, 'services.html'));
});

app.get(['/contact', '/contact.html'], (req, res) => {
  res.sendFile(path.join(__dirname, 'contact.html'));
});

// Start local server if run directly
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`=======================================================`);
    console.log(` Indian Wonders & Columbus Travels Server Running!`);
    console.log(` Local URL: http://localhost:${PORT}`);
    console.log(`=======================================================`);
  });
}

// Export for Vercel Serverless Function entrypoint
module.exports = app;
