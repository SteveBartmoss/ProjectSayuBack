import { conexion } from "../config/conexion.js";

export const getNotas=async(req,res)=>{
    const idusuario=req.params.id
    try{
        const [result] = await conexion.query('SELECT * FROM notas WHERE autor=?',[idusuario]);
        res.json(result);
    }catch(error){
        return res.status(500).json({message: error.message});
    }
}

export const createNota=(req,res)=>{
    
}