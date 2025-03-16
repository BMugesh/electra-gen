const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

// Import your routes
const contactRoutes = require('./routes/contact');
const newsletterRoutes = require('./routes/newsletter');

// Use routes
app.use('/api/contact', contactRoutes);
app.use('/api/newsletter', newsletterRoutes);

exports.api = functions.https.onRequest(app); 