import express from 'express';
import cors from 'cors';
import pool from './db/db.js'
// import {errorHandler} from './middlewares/errorHandler.middleware.ts'

const app = express();

app.use(cors())



const port = process.env.PORT || 8000;


//Middlewares used for POST and PUT requests
app.use(express.json()); //Handles the incoming data and converts it into jason format
app.use(express.urlencoded({extended : true})); //Handles the form data and converts it into JSON format

//Error Handling middlewares
// app.use(errorHandler);


//DATABASE TESTING
app.get('/',async (req,res) => {
    const result = await pool.query("SELECT current_database()");
    res.send(`The database name is : ${result.rows[0].current_database}`);
})

//Routes


//Error


app.listen(port,() => {
    console.log(`Server is running at ${port}`)
})

