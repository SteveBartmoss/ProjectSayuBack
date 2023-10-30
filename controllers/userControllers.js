import { conexion } from "../config/conexion.js";

export const getUsuarios=async(req,res)=>{
    try{
        const [rows]=await conexion.query('SELECT * FROM usuarios');
        res.json(rows)
    }catch(error){
        return res.status(500).json({message: error.message});
    }
}

