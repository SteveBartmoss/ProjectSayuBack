import express from 'express';
import { PORT } from '../config/config.js';

//se implementa el modulo de express
const app = express();

app.use(express.json());

//se resuelve el problema de crossorigin
app.use((req,res, next)=>{
    res.append('Access-Control-Allow-Origin',['*']);
    res.append('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers','Content-type');
    next();
});

// se pone a la escucha el servidor
app.listen(PORT);


console.log(`Server runing on port ${PORT}`);
console.log('Happy Hakcing :)');