const express = require('express');
const router = express();
const {otpValidator} = require('../helpers/validator');
const userController = require('../controllers/userController')

router.use(express.json());

//verification otp
router.post('/send-otp', otpValidator, userController.sendOtp )

//send update password to email
// router.post('/password-reset',userController.sendPass)



module.exports = router;