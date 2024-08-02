const express = require('express');
const EmailController = require('../controllers/emailController');
const router = express.Router();

router.post('/email/return', EmailController.sendDevolucaoEmail);
router.post('/email/warranty', EmailController.sendGarantiaEmail);
router.post('/email/repair', EmailController.sendReparacaoEmail);
router.post('/email/general', (req, res) => {
    console.log("POST /api/email/general with data:", req.body);
    try {
        // Seu código para lidar com esta rota
        res.status(200).json({ message: 'Email sent!' });
    } catch (error) {
        console.error("Error handling /email/general:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});


module.exports = router;
