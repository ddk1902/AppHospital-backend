const express= require ('express')
require('dotenv').config();
const {dbConnection}= require('./database/config');
const cors =require('cors');

//creamos el servidor express

const app=express();

//configuramos el cors
app.use(cors());
// base de datos
dbConnection();

//Rutas

app.get('/',(req,res)=>{
    res.json({
       
    })
})

//Levantar el servidor

app.listen(process.env.PORT,()=>{
    console.log('Servidor corriendo en el puerto  ' +  process.env.PORT);
})