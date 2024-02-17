import express from 'express';
const router = express.Router();
import { login, register, profile } from '../controller/UserController.js';

router.get('/', (req, res) => {
  res.json('Server is Already Running!!!');
});

router.post('/register', register);
router.post('/login', login);

router.get('/profile', profile);

export default router;
