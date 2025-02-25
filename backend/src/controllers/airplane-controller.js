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


async function getAirplanes(req,res) {
    try {
        const airplanes=await AirplaneService.getAirplanes();
        SuccessResponse.data=airplanes;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error=error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function  getAirplaneByIdController(req,res) {
   try {
     const airplane=await AirplaneService.getAirplaneById(req.params.id);
     SuccessResponse.data=airplane;
     return res.status(StatusCodes.OK).json(SuccessResponse);
   } catch (error) {
    ErrorResponse.error=error;
    return res.status(error.statusCode).json(ErrorResponse);
    
   }
}

async function destroyAirplaneController(req,res) {
    try {
        const response=await AirplaneService.destroyAirplane(req.params.id);
        SuccessResponse.data=response;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error=error;
        return res.status(error.statusCode).json(ErrorResponse);
        
    }
}

async function updateAirplaneController(req, res) {
    try {
        const response = await AirplaneService.updateAirplane(
             req.params.id,
             req.body.modelNumber,
             req.body.capacity,
        );
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

module.exports={
    createAirplane,
    getAirplanes,
    getAirplaneByIdController,
    destroyAirplaneController,
 updateAirplaneController,
}