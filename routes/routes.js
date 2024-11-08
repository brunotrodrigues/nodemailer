const express = require('express');
const EmailController = require('../controllers/emailController');

const router = express.Router();

router.post('/email/return', EmailController.sendDevolucaoEmail);
router.post('/email/warranty', EmailController.sendGarantiaEmail);
router.post('/email/repair', EmailController.sendReparacaoEmail);
router.post('/email/questions', EmailController.sendQuestionsEmail);
router.post('/email/general', EmailController.sendOptionBasedEmail);

module.exports = router;
