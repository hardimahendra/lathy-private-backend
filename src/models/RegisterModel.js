import mongoose from 'mongoose';

export const teachers = mongoose.model(
  'guru',
  new mongoose.Schema({
    nameGuru: {
      type: 'string',
      required: true,
    },
    emailGuru: {
      type: 'string',
      required: true,
    },
    genderGuru: {
      type: 'string',
      required: true,
    },
    schoolGuru: {
      type: 'string',
      required: true,
    },
    teachingHistory: {
      type: 'string',
      required: true,
    },
    masteredLearning: {
      type: 'string',
      required: true,
    },
    passGuru: {
      type: 'string',
      required: true,
    },
  })
);

export const students = mongoose.model(
  'siswa',
  new mongoose.Schema({
    nameSiswa: {
      type: 'string',
      required: true,
    },
    emailSiswa: {
      type: 'string',
      required: true,
    },
    genderSiswa: {
      type: 'string',
      required: true,
    },
    schoolSiswa: {
      type: 'string',
      required: true,
    },
    passSiswa: {
      type: 'string',
      required: true,
    },
  })
);
export const staffs = mongoose.model(
  'staff',
  new mongoose.Schema({
    nameStaff: {
      type: 'string',
      required: true,
    },
    emailStaff: {
      type: 'string',
      required: true,
    },
    genderStaff: {
      type: 'string',
      required: true,
    },
    schoolStaff: {
      type: 'string',
      required: true,
    },
    job: {
      type: 'string',
      required: true,
    },
    lengthOfWork: {
      type: 'string',
      required: true,
    },
    passStaff: {
      type: 'string',
      required: true,
    },
  })
);
