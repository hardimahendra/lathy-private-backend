import { teachers, students, staffs } from '../models/RegisterModel.js';

// Teacher Controller
export const insertTeachers = async (req, res) => {
  const getingDataForm = new teachers(req.body);
  try {
    const inserted = await getingDataForm.save();
    res.status(200).json(inserted);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// Students Controller
export const insertStudents = async (req, res) => {
  const getingDataForm = new students(req.body);
  try {
    const inserted = await getingDataForm.save();
    res.status(200).json(inserted);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// Staff Controller
export const insertStaff = async (req, res) => {
  const getingDataForm = new staffs(req.body);
  try {
    const inserted = await getingDataForm.save();
    res.status(200).json(inserted);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
