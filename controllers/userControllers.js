import { conexion } from "../config/conexion.js";

export const getUsuarios=async(req,res)=>{
    try{
        const [rows]=await conexion.query('SELECT * FROM usuarios');
        res.json(rows)
    }catch(error){
        return res.status(500).json({message: error.message});
    }
}

export const createUsuario=async(req,res)=>{

    const {usuario,pass,rol}=req.body;

    try{
        const [result]=await conexion.query('INSERT INTO usuarios (usuario,pass,rol) VALUES (?,?,?)',
        [usuario,pass,rol]);

        res.send({
            code: 7,
            info: result
        })

    }catch(error){
        return res.status(500).json({message: error.message});
    }
}

export const updateUsuario=async(req,res)=>{
    
    const {usuario,pass,rol}=req.body;

    try{
        
        const [result]=await conexion.query('UPDATE usuarios SET usuario=?,pass=?,rol=? WHERE idusuario=?',
        [usuario,pass,rol]);

        res.send({
            code: 5,
            info: result
        })

    }catch(error){
        return res.status(500).json({message: error.message});
    }
}

export const deleteUsuario=async(req,res)=>{

    const id=req.params.id;

    try{
        const [result]=await conexion.query('DELETE FROM usuarios WHERE idusuario=?',
        [id]);
    }catch(error){
        return res.status(500).json({message: error.message});
    }
}

