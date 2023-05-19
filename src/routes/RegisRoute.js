import express from 'express';

const router = express.Router();

import { getSiswa, insertSiswa, deleteSiswa} from '../controller/auth/Register/RegisSiswaController.js';
import { getGuru, insertGuru, deleteGuru} from '../controller/auth/Register/RegisGuruController.js';
import { getStaff, insertStaff, deleteStaff} from '../controller/auth/Register/RegisStaffController.js';

// Route API Siswa 
router.get("/register/siswa",getSiswa);

router.post("/register/siswa", insertSiswa);
router.delete("/register/siswa/:id", deleteSiswa);

// Route API Guru
router.get("/register/guru", getGuru);
router.post("/register/guru", insertGuru);
router.delete("/register/guru/:id", deleteGuru);

// Route API Staff
router.get("/register/staff", getStaff);
router.post("/register/staff", insertStaff);
router.delete("/register/staff/:id", deleteStaff);


export default router;