import express from 'express';
import cors from 'cors';

const router = express.Router();

import testServer from '../controller/testServer.js';
import { login, register, profile } from '../controller/UserController.js';

router.use(
  cors({
    credentials: true,
    origin: 'http://localhost:5173',
  })
);

router.get('/', testServer);

router.post('/register', register);
router.post('/login', login);

router.get('/profile', profile);

export default router;
