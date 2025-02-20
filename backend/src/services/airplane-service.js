
const {AirplaneRepository}=require('../repositories');

const airplaneRepository=new AirplaneRepository(); //object


 async function createAirplane(data){
 try {
    const airplane=await airplaneRepository.create(data);
    return airplane;
 } catch (error) {
    throw error;
 }
}

module.exports={
    createAirplane
}