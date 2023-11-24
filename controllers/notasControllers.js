import { conexion } from "../config/conexion.js";

export const getNotas=async(req,res)=>{
    const idUsuario=req.params.id
    try{
        const [result] = await conexion.query('SELECT * FROM notas WHERE autor=?',[idUsuario]);
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

export const updateNota=async(req,res)=>{
    const id=req.params.id;
    const {titulo,descripcion}=req.body;
    try{
        const [result]=await conexion.query('UPDATE notas SET titulo=?, descripcion=? WHERE idnota=?',
        [titulo,descripcion,id]);
        res.json({
            code: 5,
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
        if(result.affectedRows<=0){
            return res.status(404).json({
                message: 'No se borro la nota'
            });
        }
        res.sendStatus(204);
    }catch(error){
        return res.status(500).json({message: error.message});
    }
}