// const express = require('express');
// const router = express.Router();

// //authorization middleware
// const authMiddleware = require('../middleware/authMiddleware');

// router.get("/all-answers", authMiddleware, (req, res) => {
//     res.send ("all answers")
// })

// module.exports = router

const express = require("express");
const router = express.Router();
const authMiddleWare = require("../middleware/authMiddleWare");

const { addAnswer, getAnswer } = require("../controller/answerController");

router.post("/addanswer/:id", authMiddleWare, addAnswer);
router.get("/getanswer/:questionid", authMiddleWare, getAnswer);

module.exports = router;
