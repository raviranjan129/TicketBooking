const { StatusCodes } = require("http-status-codes");
const { CityService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");

async function cityController(req,res) {
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


 module.exports={
    cityController,
 }