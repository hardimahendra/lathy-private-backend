import express from 'express';
const router = express.Router();

import { login, register, profile } from '../controller/UserController.js';

router.post('/register', register);
router.post('/login', login);

router.get('/profile', profile);

export default router;
