import RegistrarGuru from "../../../models/auth/Register/RegisGuruModel.js";

// ===================== Controller Guru
export const getGuru = async (req, res) => {
    try {
        const getingGuru = await RegistrarGuru.find();
        res.json(getingGuru)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const insertGuru = async (req, res) => {
    const registrarGuru = new RegistrarGuru(req.body);
    try{
        const insertedRegistrarGuru = await registrarGuru.save();
        res.status(200).json(insertedRegistrarGuru);
    }catch(err){
        res.status(404).json({message: err.message});
    }
}

export const deleteGuru = async (req, res) => {
    try{
        const deletedGuru = await RegistrarGuru.deleteOne({_id:req.params.id});
        res.status(200).json(deletedGuru);
    }catch(error){
        res.status(400).json({message:error.message});
    }
}