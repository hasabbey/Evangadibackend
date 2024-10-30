// const express = require('express');
// const router = express.Router();

// //authorization middleware
// const authMiddleware = require('../middleware/authMiddleware');

// router.get("/all-questions", authMiddleware, (req, res) => {
//     res.send ("all questions")
// })

// module.exports = router

const express = require("express");
const authMiddleWare = require("../middleware/authMiddleWare");
const router = express.Router();

const {
  askQuestion,
  allQuestion,
  singleQuestion,
} = require("../controller/questionController");

router.post("/addquestion", authMiddleWare, askQuestion);
router.get("/allquestion", authMiddleWare, allQuestion);
router.get("/singlequestion/:questionid", authMiddleWare, singleQuestion);

module.exports = router;