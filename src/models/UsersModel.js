import mongoose from 'mongoose';

const User = mongoose.model(
  'user',
  new mongoose.Schema({
    id: 'number',
    username: 'string',
    email: {
      type: 'string',
      unique: true,
    },
    password: {
      type: 'string',
    },
    images: {},
    phone: {},
    createdAt: {},
    isActive: {},
  })
);

export default User;