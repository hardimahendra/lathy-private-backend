
import mongoose from 'mongoose';

const RegistrarSiswa = mongoose.model("siswa", new mongoose.Schema({
    nameSiswa:{
        type: 'string',
        required: true
    },
    emailSiswa:{
        type: 'string',
        required: true
    },
    genderSiswa:{
        type: 'string',
        required: true
    },
    schoolSiswa:{
        type: 'string',
        required: true
    },
    passSiswa:{
        type: 'string',
        required: true
    }
    })
)

export default RegistrarSiswa;