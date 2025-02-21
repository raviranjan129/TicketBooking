const {StatusCodes}=require('http-status-codes');
const {AirplaneService}=require('../services');
const {SuccessResponse,ErrorResponse}=require('../utils/common');

/**
 * POST:/airplanes
 * req-body {modelNumber:'airbus34',capacity:200}
 */
async function createAirplane(req,res) {
    try {
        console.log(req.body);
        const response= await AirplaneService.createAirplane({
            modelNumber:req.body.modelNumber,
            capacity:req.body.capacity
        })
        SuccessResponse.data=response;
        return res.status(StatusCodes.CREATED)
        .json(SuccessResponse)
    } catch (error) {
        ErrorResponse.error=error;
        return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json(ErrorResponse);
    }
}

module.exports={
    createAirplane
}