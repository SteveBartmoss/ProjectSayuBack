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

export const createNota=async(req,res)=>{
    const {titulo,descripcion,autor}=req.body;
    try{
        const [result]=await conexion.query('INSERT INTO notas (titulo,descipcion,autor) VALUES (?,?,?)',
        [titulo,descripcion,autor]);
        res.json({
            code: 7,
            info: result
        });
    }catch(error){
        return res.status(500).json({message: error.message});
    }
}

export const deleteNota=async(req,res)=>{
    const id=req.params.id;
    try{
        const [result]=await conexion.query('DELETE FROM nota WHERE idnota=?',[id]);
    }catch(error){
        return res.status(500).json({message: error.message});
    }
}