const { StatusCodes } = require("http-status-codes");

const { AirportService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");


async function createAirportController(req,res) {

    try {
        const response=await AirportService.createAirport(
           {
             name:req.body.name,
             code:req.body.code,
             address:req.body.address,
             cityId:req.body.cityId
           }
        )
        SuccessResponse.data=response;
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error=error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
    
}

async function  getAirportByIdController(req,res) {
    try {
        const response=await AirportService.getAirportById(
            req.params.id
        );
        SuccessResponse.data=response;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error=error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
    
}

async function  getAirport(req,res) {
    try {
        const response=await AirportService.getAllAirport();
        SuccessResponse.data=response;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error=error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
    
}

async function  updateAirportController(req,res) {

    try {
        const response=await AirportService.updateAirport(
            req.params.id,
            req.body.name,
            req.body.code,
            req.body.cityId,

        )
        SuccessResponse.data=response
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error=error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
    
} 

module.exports={
    createAirportController,
    getAirportByIdController,
 getAirport,
 updateAirportController

}