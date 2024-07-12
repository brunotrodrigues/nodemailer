const express = require('express');
const EmailController = require('../controllers/emailController');

const router = express.Router();

router.post('/send-email-return', EmailController.sendDevolucaoEmail);
router.post('/send-email-warranty', EmailController.sendGarantiaEmail);
router.post('/send-email-repair', EmailController.sendReparacaoEmail);

module.exports = router;