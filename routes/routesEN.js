const express = require('express');
const EmailController = require('../controllers/emailControllerEN');

const router = express.Router();

router.post('/en/email/return', EmailController.sendReturnEmailEN);
router.post('/en/email/warranty', EmailController.sendWarrantyEmailEN);
router.post('/en/email/repair', EmailController.sendRepairEmailEN);
router.post('/en/email/general', EmailController.sendGeneralEmailEN);
router.post('/en/email/questions', EmailController.sendQuestionsEmailEN);

module.exports = router;
