import mongoose from 'mongoose';

export const teachers = mongoose.model(
  'guru',
  new mongoose.Schema({
    name: {
      type: 'string',
      required: true,
    },
    email: {
      type: 'string',
      required: true,
    },
    gender: {
      type: 'string',
      required: true,
    },
    school: {
      type: 'string',
      required: true,
    },
    experience: {
      type: 'string',
      required: true,
    },
    learningSkill: {
      type: 'string',
      required: true,
    },
    password: {
      type: 'string',
      required: true,
    },
  })
);

export const students = mongoose.model(
  'siswa',
  new mongoose.Schema({
    name: {
      type: 'string',
      required: true,
    },
    email: {
      type: 'string',
      required: true,
    },
    gender: {
      type: 'string',
      required: true,
    },
    school: {
      type: 'string',
      required: true,
    },
    password: {
      type: 'string',
      required: true,
    },
  })
);
export const staffs = mongoose.model(
  'staff',
  new mongoose.Schema({
    name: {
      type: 'string',
      required: true,
    },
    email: {
      type: 'string',
      required: true,
    },
    gender: {
      type: 'string',
      required: true,
    },
    school: {
      type: 'string',
      required: true,
    },
    job: {
      type: 'string',
      required: true,
    },
    experience: {
      type: 'string',
      required: true,
    },
    password: {
      type: 'string',
      required: true,
    },
  })
);
