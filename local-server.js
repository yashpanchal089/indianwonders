/**
 * Local Express Development Server
 * Indian Wonders & Columbus Travels & Services Pvt. Ltd.
 * Established 1984 | Approved by Dept. of Tourism, Govt. of India | IATA Accredited
 */

const express = require('express');
const path = require('path');
const app = require('./api/index.js');

const PORT = process.env.PORT || 3000;

// Serve static frontend files locally
app.use(express.static(path.join(__dirname)));

// Clean page route handlers for local preview
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

// Start Server locally
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
