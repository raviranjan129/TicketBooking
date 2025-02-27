
const { StatusCodes } = require('http-status-codes');
const {AirplaneRepository}=require('../repositories');
const AppError = require('../utils/errors/app-error');

const airplaneRepository=new AirplaneRepository(); //object


 async function createAirplane(data){
 try {
    const airplane=await airplaneRepository.create(data);
    return airplane;
 } catch (error) {
// console.log(error)
    if(error.name=='SequelizeValidationError'){
        let explanation=[];
        error.errors.forEach((err)=>{
            explanation.push(err.message);
        });
        console.log(explanation);
       throw new AppError(explanation,StatusCodes.BAD_REQUEST);
    }

    throw new AppError('Cannot create a new Airplane object',StatusCodes.INTERNAL_SERVER_ERROR);
 }
}


async function getAirplanes() {
    try {
        const airplanes=await airplaneRepository.getAll();
        return airplanes;
    } catch (error) {
        throw new AppError('cannot fetch data of all the airplanes ',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

async function  getAirplaneById(id) {
    try {
        const airplane=await airplaneRepository.get(id);
        return airplane;
    } catch (error) {

        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError('The airplane you requested is not present',error.statusCode);
        }
        throw new AppError('Cannot fetch data of all the airplane',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function destroyAirplane(id) {
    try {
        const airplane=await airplaneRepository.destroy(id);
        return airplane;
    } catch (error) {
        if(error.statusCode==StatusCodes.NOT_FOUND){
            throw new AppError('The airplane you requested to delete is not present',error.statusCode);
        }
        throw new AppError('Cannot delete the airplane',StatusCodes.INTERNAL_SERVER_ERROR);
    }
    
}

//update the airplane -> patch : /api/v1/airplane

async function updateAirplane(id,modelNumber,capacity) {
    try {

        const airplane=await airplaneRepository.get(id);
       if(!airplane){
        throw new AppError('Cannot find the airplane with given id ',StatusCodes.BAD_REQUEST);
       }

        const response=await airplaneRepository.update(id,{modelNumber,capacity});
          return response;
    } catch (error) {
        throw new AppError('Cannot update the Airplane',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports={
    createAirplane,
    getAirplanes,
    getAirplaneById,
    destroyAirplane,
    updateAirplane,
}