const express = require('express');
const EmailController = require('../controllers/emailController');

const router = express.Router();

router.post('/email/return', EmailController.sendDevolucaoEmail);
router.post('/email/warranty', EmailController.sendGarantiaEmail);
router.post('/email/repair', EmailController.sendReparacaoEmail);
router.post('/email/general', EmailController.sendGeneralEmail)
router.post('/email/questions', EmailController.sendQuestionsEmail)
router.post('/sendOptionBasedEmail', EmailController.sendOptionBasedEmail);

module.exports = router;
