const express = require('express');
const router = express.Router();
const signUpController = require('../Controllers/signup');

router.get('/checkDuplicate', signUpController.checkDuplicate);


router.post('/', signUpController.signup);

module.exports = router;