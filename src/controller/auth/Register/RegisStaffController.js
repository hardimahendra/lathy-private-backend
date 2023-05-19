import RegistrarStaff from "../../../models/auth/Register/RegisStaffModel.js";

// ===================== Controller Staff
export const getStaff = async (req, res) => {
    try {
        const getingStaff = await RegistrarStaff.find();
        res.json(getingStaff)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const insertStaff = async (req, res) => {
    const registrarStaff = new RegistrarStaff(req.body);
    try{
        const insertedRegistrarStaff = await registrarStaff.save();
        res.status(200).json(insertedRegistrarStaff);
    }catch(err){
        res.status(404).json({message: err.message});
    }
}

export const deleteStaff = async (req, res) => {
    try{
        const deletedStaff = await RegistrarStaff.deleteOne({_id:req.params.id});
        res.status(200).json(deletedStaff);
    }catch(error){
        res.status(400).json({message:error.message});
    }
}