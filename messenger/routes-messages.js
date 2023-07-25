const express = require('express');
const router = express.Router();
const messagesController = require('../controllers/messages');
const authMiddleware = require('../middleware/auth');

// Protected route example using authMiddleware
router.post('/send', authMiddleware, messagesController.sendMessage);

module.exports = router;