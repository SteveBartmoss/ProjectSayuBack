import { conexion } from "../config/conexion";


export const getTareas=async(req,res)=>{
    const idlista=req.params.id;
    try{
        const [result]=await conexion.query('SELECT * FROM notas WHERE lista=?',[idlista]);
        res.json(result);
    }catch(error){
        return res.status(500).json({message: error.message});
    }
}