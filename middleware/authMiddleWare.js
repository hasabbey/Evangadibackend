// // const { StatusCodes } = require("http-status-codes");
// // const jwt = require("jsonwebtoken");
// // async function authMiddleware(req, res, next) {
// //   const authHeader = req.headers.authorization;
// //   if (!authHeader || !authHeader.startsWith("Bearer")) {
// //     return res
// //       .status(StatusCodes.UNAUTHORIZED)
// //       .json({ msg: "wrong" });
// //   }
// //   const token = authHeader.split(" ")[1];
// //   // console.log(authHeader);
// //   // console.log("to",token);
// //   try {
// //     const { username, userid, firstname } = jwt.verify(
// //       token,"secret"
// //     );
// //     req.user = {
// //       username,
// //       userid,
// //       firstname,
// //     };
// //     next();

// //   } catch (error) {
// //     console.log(error);
// //     return res
// //       .status(StatusCodes.UNAUTHORIZED)
// //       .json({ msg: "invalid" });
// //   }
// // }

// // module.exports = authMiddleware;

// const { StatusCodes } = require("http-status-codes");
// const jwt = require("jsonwebtoken");
// const dotenv = require("dotenv");

// dotenv.config();

// async function authMiddleware(req, res, next) {
//   const authHeader = req.headers.authorization;
//   if (!authHeader || !authHeader.startsWith("Bearer ")) {
//     return res
//       .status(StatusCodes.UNAUTHORIZED)
//       .json({ msg: "Authorization header missing or malformed" });
//   }

//   const token = authHeader.split(" ")[1];

//   try {
//     const secret = process.env.JWT_SECRET;
//     const { username, userid, firstname } = jwt.verify(token, `${secret}` );

//     req.user = {
//       username,
//       userid,
//       firstname,
//     };

//     next();
//   } catch (error) {
//     console.log(error);
//     return res
//       .status(StatusCodes.UNAUTHORIZED)
//       .json({ msg: "Token verification failed" });
//   }
// }

// module.exports = authMiddleware;
const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

async function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ msg: "Authorization header missing or malformed" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const secret = process.env.JWT_SECRET;
    const { username, userid, firstname } = jwt.verify(token, secret);

    req.user = {
      username,
      userid,
      firstname,
    };

    next();
  } catch (error) {
    console.log(error);
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ msg: "Token verification failed" });
  }
}

module.exports = authMiddleware;
