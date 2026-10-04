// Contact Controller - handles contact form submissions with validation and logging

const handleContactSubmission = async (req, res) => {
  try {
    const { name, email, message, subject } = req.body;

    // Validation
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return res.status(400).json({
        success: false,
        error: 'Validation failed',
        message: 'Name is required and cannot be empty.'
      });
    }

    if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return res.status(400).json({
        success: false,
        error: 'Validation failed',
        message: 'A valid email address is required.'
      });
    }

    if (!message || typeof message !== 'string' || message.trim().length < 5) {
      return res.status(400).json({
        success: false,
        error: 'Validation failed',
        message: 'Message must be at least 5 characters long.'
      });
    }

    // Cleaned sanitized payload
    const submission = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: subject ? subject.trim() : 'Portfolio Inquiry',
      message: message.trim(),
      timestamp: new Date().toISOString(),
      userAgent: req.headers['user-agent'] || 'unknown',
      ip: req.ip || req.connection.remoteAddress
    };

    // Log the message securely to console / server records
    console.log('--------------------------------------------------');
    console.log(`[Contact Submission] Received at ${submission.timestamp}`);
    console.log(`From: ${submission.name} <${submission.email}>`);
    console.log(`Subject: ${submission.subject}`);
    console.log(`Message: ${submission.message}`);
    console.log('--------------------------------------------------');

    return res.status(200).json({
      success: true,
      message: 'Message received successfully. Thank you for reaching out!'
    });
  } catch (error) {
    console.error('Error handling contact submission:', error);
    return res.status(500).json({
      success: false,
      error: 'Internal Server Error',
      message: 'Unable to process your message at this moment. Please try emailing directly.'
    });
  }
};

module.exports = {
  handleContactSubmission
};
