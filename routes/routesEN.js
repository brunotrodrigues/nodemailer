const express = require('express');
const EmailController = require('../controllers/emailControllerEN');

const router = express.Router();

router.post('/email/returnEN', EmailController.sendReturnEmailEN);
router.post('/email/warrantyEN', EmailController.sendWarrantyEmailEN);
router.post('/email/repairEN', EmailController.sendRepairEmailEN);
router.post('/email/questionsEN', EmailController.sendQuestionsEmailEN);
router.post('/email/generalEN', EmailController.sendOptionBasedEmailEN);

module.exports = router;
