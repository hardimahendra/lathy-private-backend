import express from 'express';
import dotenv from 'dotenv';

import router from './src/routes/router.js';
import bodyParser from 'body-parser';
import connectDB from './src/databases/connection.js';

dotenv.config();
const app = express();

<<<<<<< HEAD
connectDB(
  app.listen(5000, () => {
    console.log('Running at port 5000');
  })
);
=======
connectDB(app.listen(6969, () => {
    console.log('Running at port 6969')
}));
>>>>>>> 3c2704982d865c4b31e9ed6a79fa99b49af5f6fc

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use(express.json());

app.use('/', router);

app.use('/users', router);

// Middleware Handle Error
app.use((error, req, res, next) => {
  const status = error.errorStatus || 500;
  const message = error.message;
  const data = error.data;
  res.json(status).json({
    message: message,
    data: data,
  });
});
