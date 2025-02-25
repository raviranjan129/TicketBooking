
const {StatusCodes}=require('http-status-codes');

const {CityRepository}=require('../repositories');
const AppError = require('../utils/errors/app-error');

const cityRepository=new CityRepository(); 


async function createCity(data) {
    try {
        const city=await cityRepository.create(data);
        return city;
    } catch (error) {
        if(error.name=='SequelizeValidationError' || error.name== 'SequelizeUniqueConstraintError'){
            let explanation=[];
            error.errors.forEach(err => {
                explanation.push(err.message);
            });
            throw new AppError(explanation,StatusCodes.BAD_REQUEST);
        }
        // console.log(error);
        throw new AppError('Cannot create new City object',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAllCity(params) {
    try {
        const cities=await cityRepository.getAll();
        return cities;
    } catch (error) {
        throw new AppError('Cannot get all cities',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function deleteCity(id) {
    try {
        const response=await cityRepository.destroy(id);
        return response;
    } catch (error) {
        if(error.statusCode==StatusCodes.NOT_FOUND){
            throw new AppError('The City you requested to delete is not present',error.statusCode);
        }
        throw new AppError('Cannot delete the requested city',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports={
createCity,
getAllCity,
deleteCity,
}