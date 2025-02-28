const { StatusCodes } = require("http-status-codes");
const { AirportRepository } = require("../repositories");
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

module.exports={
    createAirportController,
    
}