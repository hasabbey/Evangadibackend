//db connection
const e = require('express');
const dbConnection = require('../db/dbConfig');
const bcrypt = require('bcrypt');
const {StatusCodes} = require('http-status-codes');
const jwt = require('jsonwebtoken');
require('dotenv').config();

async function register(req, res) {
    const {username, firstname, lastname, email, pasword} = req.body;
    if (!email || !pasword || !username || !firstname || !lastname) {
        return res.status(StatusCodes.BAD_REQUEST).json({msg:"Please fill in All fields are required"});
}
try {
    const [user] = await dbConnection.query('select username,userid from users where username = ?', [username, email])
    if (user.length > 0) {
        return res.status(StatusCodes.BAD_REQUEST).json({msg:"User already exists"})
    }
    if(pasword.length <= 8) {
        return res.status(StatusCodes.BAD_REQUEST).json({msg:"Password must be at least 8 characters"})
    }  
    
    //encrypt password
    const salt = await bcrypt.genSalt(10)
    const  hashedPasword = await bcrypt.hash(pasword,salt )
    
        await dbConnection.query('INSERT INTO users (username, firstname, lastname, email, pasword) VALUES (?, ?, ?, ?, ?)', 
        [username, firstname, lastname, email, hashedPasword ])
    
    return res.status(StatusCodes.CREATED).json({msg:"User Created"})
    
    
} catch (error) {
    console.log(error.message)
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg:"Server Error"})
}
}   
  
async function login(req, res) {
    const {email, pasword} = req.body;
    if (!email || !pasword) {
        return res.status(StatusCodes.BAD_REQUEST).json({msg:"Please fill in All fields are required"});
         }
                 try {
            const [user] = await dbConnection.query('select username,userid,pasword from users where email = ?', [email])
           if (user.length == 0) {
            return res.status(StatusCodes.BAD_REQUEST).json({msg:"Invalid credentials-invalid email"});
         }
          //compare password
          const isMatch = await bcrypt.compare(pasword, user[0].pasword)
          if (!isMatch) {
             return res.status(StatusCodes.BAD_REQUEST).json({msg:"Invalid credentials-invalid password"});
          }


          const username = user[0].username
          const userid = user[0].userid
          const firstname= user[0].firstname
          const token = jwt.sign({username, firstname, userid}, process.env.JWT_SECRET, {expiresIn: '1d'})
              
          
             return res.status (StatusCodes.OK).json({msg:"Logged in", token, username})
             
             
          }
                 
              
         catch (error) {
            console.log(error.message)
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg:"Server Error"})
         }
}
 
    
async function checkUser(req, res) {
    const username = req.user.username;
    const userid = req.user.userid;
  return res
    .status(StatusCodes.OK)
    .json({ msg: "access granted", username, userid });
    // res.send("checkUser");

}

module.exports = { register, login, checkUser}



