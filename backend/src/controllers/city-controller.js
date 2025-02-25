const { StatusCodes } = require("http-status-codes");
const { CityService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");

async function createCityController(req,res) {
    try {
        const response=await CityService.createCity({
            name:req.body.name
        })
       SuccessResponse.data=response;
       return res.status(StatusCodes.CREATED).json(SuccessResponse)
    } catch (error) {
        ErrorResponse.error=error;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}

async function getAllcityController(req,res) {
    try {
        const cities= await CityService.getAllCity();
        SuccessResponse.data=cities;
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error=error;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}

async function deleteCityController(req,res) {
    try {
      const city=await CityService.deleteCity(req.params.id); 
      SuccessResponse.data=city;
      return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error=error;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}

 module.exports={
    createCityController,
    getAllcityController,
    deleteCityController,
    
 }