const mysql2= require('mysql2');
require('dotenv').config();

// Create a connection pool to MySQL database
const dbConnection = mysql2.createPool({
    user: process.env.USER,
    database: process.env.DATABASE,
    host:  process.env.HOST ,
    password: process.env.PASSWORD,
    connectionLimit: 10
})

 
    let users = `CREATE TABLE if not exists users(
          userid int(30) NOT NULL auto_increment,
          username varchar(30) not null,
          firstname varchar(30) not null,
          lastname varchar(30) not null,
          email varchar(30) not null,
          pasword varchar(100) not null,
          PRIMARY KEY (userid)
      )`;
  
    let questions = `CREATE TABLE if not exists questions(
          id int(20) not null auto_increment,
          questionid varchar(100) not null UNIQUE,
          userid int(30) not null,
          title varchar(100) not null,
          description varchar(255) not null,
         
         
          PRIMARY KEY(id,questionid),
          FOREIGN KEY (userid) REFERENCES users(userid)
      )`;
  
    let answers = `CREATE TABLE if not exists answers(
          answerid int(30) auto_increment,
          userid int(30) not null,
          questionid varchar(100) not null,
          answer varchar(255) not null,
          PRIMARY KEY(answerid),
          FOREIGN KEY (userid) REFERENCES users(userid),
          FOREIGN KEY (questionid) REFERENCES questions(questionid)
      )`;
  
      dbConnection.query(users, (err, res) => {
      if (err) {
        console.log(err);
      } 
      console.log("user table created");
    });
    dbConnection.query(questions, (err, res) => {
      if (err) {
       console.log(err);}
      console.log("questions table created");
    });
    dbConnection.query(answers, (err, res) => {
      if (err) {
        console.log(err);
      } 
      console.log("answers table created");
    });
    // res.send("table created successful");
  



module.exports = dbConnection.promise()
