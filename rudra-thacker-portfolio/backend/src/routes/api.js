const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contact');

// Route for handling contact form submissions
router.post('/contact', contactController.submitContactForm);

module.exports = router;