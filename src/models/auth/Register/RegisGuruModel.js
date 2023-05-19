
import mongoose from 'mongoose';

const RegistrarGuru = mongoose.model("guru", new mongoose.Schema({
    nameGuru:{
        type: 'string',
        required: true
    },
    emailGuru:{
        type: 'string',
        required: true
    },
    genderGuru:{
        type: 'string',
        required: true
    },
    schoolGuru:{
        type: 'string',
        required: true
    },
    teachingHistory:{
        type:"string",
        required: true
    },
    masteredLearning:{
        type:"string",
        required: true
    },
    passGuru:{
        type: 'string',
        required: true
    }
    })
)

export default RegistrarGuru;