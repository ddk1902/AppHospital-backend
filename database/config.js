const mongoose= require('mongoose');
const dbConnection= async()=>{

    try {
        await mongoose.connect(process.env.BD_CNS);

        console.log('Base de datos conectada..!')
        
    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de conectarse, favor verifique..!!');
    }
   
}

module.exports={
    dbConnection
}