
import mongoose from 'mongoose';

const RegistrarStaff = mongoose.model("staff", new mongoose.Schema({
    nameStaff:{
        type: 'string',
        required: true
    },
    emailStaff:{
        type: 'string',
        required: true
    },
    genderStaff:{
        type: 'string',
        required: true
    },
    schoolStaff:{
        type: 'string',
        required: true
    },
    job:{
        type: 'string',
        required: true
    },
    lengthOfWork:{
        type: 'string', 
        required: true},
    passStaff:{
        type: 'string',
        required: true
    }
    })
)

export default RegistrarStaff;