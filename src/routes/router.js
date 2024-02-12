import express from 'express';
import cors from 'cors';

const router = express.Router();


import { login, register, profile } from '../controller/UserController.js';

router.use(
  cors({
    origin: ['https://lathy-private.vercel.app'],
    credentials: true,
  })
);


router.post('/register', register);
router.post('/login', login);

router.get('/profile', profile);

export default router;
