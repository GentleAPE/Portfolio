const twilio = require('twilio');
const config = require('./config');

const twilioClient = twilio(config.twilioAccountSid, config.twilioAuthToken);

module.exports = twilioClient;