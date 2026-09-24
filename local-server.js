/**
 * Local Express Development Server
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

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static frontend files locally
app.use(express.static(path.join(__dirname)));

// REST API Endpoints for Local Testing
app.get('/api/credentials', (req, res) => res.json({ status: 'success', data: COMPANY_CREDENTIALS }));
app.get('/api/subcategories', (req, res) => res.json({ status: 'success', data: SUBCATEGORIES }));
app.get('/api/packages', (req, res) => res.json({ status: 'success', count: TOURS_DATA.length, data: TOURS_DATA }));
app.get('/api/currencies', (req, res) => res.json({ status: 'success', data: CURRENCY_RATES }));
app.get('/api/services', (req, res) => res.json({ status: 'success', data: SPECIALIZED_SERVICES }));

// Clean page route handlers for local preview
app.get('/packages', (req, res) => res.sendFile(path.join(__dirname, 'packages.html')));
app.get('/package-detail', (req, res) => res.sendFile(path.join(__dirname, 'package-detail.html')));
app.get('/custom-tour', (req, res) => res.sendFile(path.join(__dirname, 'custom-tour.html')));
app.get('/services', (req, res) => res.sendFile(path.join(__dirname, 'services.html')));
app.get('/contact', (req, res) => res.sendFile(path.join(__dirname, 'contact.html')));

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`=======================================================`);
    console.log(` Indian Wonders & Columbus Travels Server Running!`);
    console.log(` Established 1984 | Approved by Dept. of Tourism, Govt. of India`);
    console.log(` Local URL: http://localhost:${PORT}`);
    console.log(`=======================================================`);
  });
}

module.exports = app;
