import express from 'express';
const router = express.Router();
import { login, register, profile } from '../controller/UserController.js';

router.get('/', (req, res) => {
  res.json(console.log('Server Is RUNNING!!!'));
});

router.post('/users/register', register);
router.post('/users/login', login);

router.get('/profile', profile);

export default router;
