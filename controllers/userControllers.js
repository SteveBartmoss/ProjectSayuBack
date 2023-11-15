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

    const {titulo,descripcion,autor}=req.body;

    try{
        const [result]=await conexion.query('INSERT INTO nota (titulo,descripcion,autor) VALUES (?,?,?)',
        [titulo,descripcion,autor]);

        res.send({
            code: 7,
            info: result
        })

    }catch(error){
        return res.status(500).json({message: error.message});
    }
}

