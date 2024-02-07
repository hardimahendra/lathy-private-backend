import mongoose from 'mongoose';

const User = mongoose.model(
  'user',
  new mongoose.Schema({
    username: 'string',
    email: {
      type: 'string',
      unique: true,
    },
    password: {
      type: 'string',
    },
  })
);

export default User;