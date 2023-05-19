import RegistrarSiswa from "../../../models/auth/Register/RegisSiswaModel.js";


export const getSiswa = async (req, res) => {
    try {
        const getingSiswa = await RegistrarSiswa.find();
        res.json(getingSiswa)
    } catch (error) {
        res.status(200).json({message: error.message});
    }
}

export const insertSiswa = async (req, res) => {
    const registrarSiswa = new RegistrarSiswa(req.body);

    try{
        const insertedRegistrarSiswa = await registrarSiswa.save();
        res.status(201).json(insertedRegistrarSiswa);
    }catch(err){
        res.status(404).json({message: err.message});
    }
}

export const deleteSiswa = async (req, res) => {
    try{
        const deletedSiswa = await RegistrarSiswa.deleteOne({_id:req.params.id});
        res.status(200).json(deletedSiswa);
    }catch(error){
        res.status(400).json({message:error.message});
    }
}