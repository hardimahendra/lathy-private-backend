import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import RegisRoute from "./src/routes/RegisRoute.js";
import bodyParser from 'body-parser';
import connectDB from './src/databases/connection.js';

dotenv.config();
const app = express();

connectDB(app.listen(6969, () => {
    console.log('Running at port 5000')
}));

app.use(bodyParser.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})


app.use(cors({credentials:true, origin:'http://localhost:5173'}));
app.use(express.json());
app.use("/auth", RegisRoute);


// Middleware Handle Error
app.use((error, req, res, next) => {
    const status = error.errorStatus || 500;
    const message = error.message;
    const data = error.data;
    res.json(status).json({
        message: message, 
        data: data
    });
})

