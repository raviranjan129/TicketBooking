const {StatusCodes,}=require('http-status-codes');

const {AirportRepository}=require('../repositories');
const AppError = require('../utils/errors/app-error');

const airportRepository=new AirportRepository();

async function createAirport(data) {
    try {
        const airport=await airportRepository.create(data);
        return airport;
    } catch (error) {
        if(error.name=='SequelizeValidationError'){
            let explanation=[];
            error.errors.forEach((err)=>{
                explanation.push(err.message);
            });
            throw new AppError(explanation,StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create a new Airport Object',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


async function getAirportById(id) {
    try {
        const response= await airportRepository.get(id);
        return response;

    } catch (error) {
        throw new AppError('Cannot get the Airport by Id',StatusCodes.INTERNAL_SERVER_ERROR);
    }
    
}

async function getAllAirport() {
    try {
        const response=await airportRepository.getAll();
        return response;
    } catch (error) {
        throw new AppError(['Cannot get all Airport'],StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function  updateAirport(id,name,code,cityId) {
    try {

        const response= await airportRepository.get(id);
        if(!response){
            throw new AppError(['Airport with given Id is not Exist'],StatusCodes.BAD_REQUEST);
        }

        const updatedAirport=await airportRepository.update(id,{name,code,cityId});
            return updatedAirport;

    } catch (error) {
        throw new AppError(['Something went wrong while updating the Airport'],StatusCodes.INTERNAL_SERVER_ERROR);
    }
    
}

module.exports={
    createAirport,
    getAirportById,
    getAllAirport,
    updateAirport,
     
}