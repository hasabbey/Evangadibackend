const express = require('express');
const router = express.Router();
const authMiddleWare = require('../middleware/authMiddleWare');
//const authMiddl eWare = require("../middleware/authMiddleWare");
//const { register, login, check } = require("../controller/userController");




//authorization middleware
// const authMiddleware = require('../middleware/authMiddleware');
 //user controller routes
const {register, login, checkUser } = require('../controller/userController');

//register routes
router.post('/register',register)

//login user
router.post('/login', login)

//check user
router.get('/check', authMiddleWare, checkUser)


module.exports = router

