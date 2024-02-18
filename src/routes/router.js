import express from 'express';
const router = express.Router();
import { login, register, profile, getUser } from '../controller/UserController.js';

router.get('/', (req, res) => {
  res.json('Server is Already Running!!!');
});

router.get('/getUser', getUser);

router.post('/register', register);
router.post('/login', login);

router.get('/profile', profile);

export default router;
