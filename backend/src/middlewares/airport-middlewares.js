const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");
const AppError = require("../utils/errors/app-error");

function validateAirportRequest(req,res,next){
    if(!req.body.name){
            ErrorResponse.message='Something went wrong while creating the request';
            ErrorResponse.error= new AppError(['Name of Airport not found'],StatusCodes.BAD_REQUEST);

            return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
     
    if(!req.body.code){
        ErrorResponse.message='Something went wrong while creating the request';
        ErrorResponse.error=new AppError(['code not found in the req body'],StatusCodes.BAD_REQUEST);

        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }

    if(!req.body.cityId){
        ErrorResponse.message='Something went wrong while creating the request';
        ErrorResponse.error=new AppError(['CityId is not found the req body'],StatusCodes.BAD_REQUEST);

        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }

    next();
}

module.exports={
    validateAirportRequest,
}