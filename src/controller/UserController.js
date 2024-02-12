import User from '../models/UsersModel.js';
import { hashPasword, comparePassword } from '../helpers/auth.js';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username) {
      return res.json({
        error: 'username is required',
      });
    }
    if (!password || password.length < 3) {
      return res.json({
        error: 'password is to short',
      });
    }
    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({
        error: 'emaial already exists',
      });
    }
    const hashedPassword = await hashPasword(password);
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    return res.json(user);
  } catch (error) {
    console.log(error);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ error: 'no user found' });
    }
    const match = await comparePassword(password, user.password);
    if (match) {
      jwt.sign({ email: user.email, id: user._id, username: user.username }, process.env.ACCESS_TOKEN, {}, (err, token) => {
        res.cookie('token', token).json(user);
      });
      res.json('passord match');
    }
    if (!match) {
      res.json({ error: 'password do not match' });
    }
  } catch (error) {
    console.log(error);
  }
};

export const profile = (req, res) => {
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, process.env.ACCESS_TOKEN, {}, (err, user) => {
      if (err) throw err;
      res.json(user);
    });
  } else {
    res.json(null);
  }
};