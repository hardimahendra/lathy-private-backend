import express from 'express';
import dotenv from 'dotenv';
import router from './src/routes/router.js';
import bodyParser from 'body-parser';
import connectDB from './src/databases/connection.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { login } from './src/controller/UserController.js';

const app = express();
dotenv.config();
app.use(
  cors({
    origin: 'https://lathy-private.vercel.app',
    credentials: true,
    optionSuccessStatus: 200,
  })
);
connectDB();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.use(express.json());
app.use('/', router);

app.post('/users/login', login);

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
app.listen(5000, () => {
  console.log(`Server already listening on http://localhost:5000`);
});