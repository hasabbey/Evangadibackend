//require('dotenv').config();
const express = require('express');
const app = express();
const port = 3306;
const cors = require('cors');

//configure cors//
app.use(cors());


//db connection
const dbConnection = require('./db/dbConfig');

//user routes middleware file
const userRoutes = require('./routes/userRoutes');

//question routes middleware file
const questionRoutes = require('./routes/questionRoutes');

//answer routes middleware file
const answerRoutes = require('./routes/answerRoutes');



//json middleware
app.use(express.json())

//user routes mildware
app.use('/api/user',userRoutes)

//question routes middleware
app.use('/api/questions',questionRoutes)

//answer routes middleware
app.use('/api/answers',answerRoutes)


//question routes middleware file


//answer routes middleware file

async function start() {
    try {
        const result = await dbConnection.execute("select 'test'");
         app.listen(port,() => console.log(`server running on port ${port}`
        ))
        
        
    } catch (error) {
        console.log(error.message)
    }
}
start()

