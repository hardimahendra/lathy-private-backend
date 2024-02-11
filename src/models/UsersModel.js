import mongoose from 'mongoose';

const User = mongoose.model(
  'user',
  new mongoose.Schema({
    id: Number,
    username: String,
    phone: Number,
    date: { type: Date, default: Date.now },
    email: {
      type: String,
      unique: true,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    images: {
      data: Buffer,
      contentType: String,
    },
    isActive: Boolean,
  })
);

export default User;