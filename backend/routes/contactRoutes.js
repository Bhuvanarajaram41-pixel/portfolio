const express = require('express');
const router = express.Router();
const { handleContactSubmission } = require('../controllers/contactController');

// POST /api/contact
router.post('/contact', handleContactSubmission);

module.exports = router;
