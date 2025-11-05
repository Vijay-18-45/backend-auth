const express = require('express')
const router = express.Router()
const authControllers = require('../controllers/authControllers')
const {identifier} = require('../middlewares/identification')
router.post('/signup',authControllers.signup)

router.post('/signin',authControllers.signin)
router.post('/signout',identifier,authControllers.signout)
router.patch('/send-verification-code',identifier,authControllers.sendVerificationCode)
router.patch('/verifyVerificationCode',identifier,authControllers.verifyVerificationCode)
router.patch('/change-password',identifier,authControllers.changePassword)
router.post('/send-forgot-password-code',authControllers.sendForgotPasswordCode)
router.patch('/verify-forgot-password-code',authControllers.verifyForgotPasswordCode)




module.exports = router;


