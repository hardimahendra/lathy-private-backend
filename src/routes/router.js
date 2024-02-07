import express from 'express';
import cors from 'cors';

const router = express.Router();

import { insertTeachers, insertStudents, insertStaff } from '../controller/RegisterController.js';
import testServer from '../controller/testServer.js';
import { loginUser, register } from '../controller/UserController.js';

router.use(
  cors({
    credentials: true,
    origin: 'http://localhost:5173',
  })
);

router.get('/', testServer);

// Router to send data from front end to mongooDB
router.post('/register/students', insertTeachers);
router.post('/register/teachers', insertStudents);
router.post('/register/staffs', insertStaff);

router.post('/login', loginUser);

export default router;
