import mongoose from 'mongoose';

const User = mongoose.model(
  'user',
  new mongoose.Schema({
    id: Number,
    username: String,
    phone: Number,
    date: Date(),
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    images: {
      data: Buffer,
      contentType: String,
    },
    roles: String,
    isActive: Boolean,
  })
);

export default User;