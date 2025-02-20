const {StatusCodes}=require('http-status-codes');
const {AirplaneService}=require('../services');


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
        return res.status(StatusCodes.CREATED)
        .json({
            success:true,
            message:'Successfully create an airplane',
            data:response,
            error:{}
        })
    } catch (error) {
        return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({
            success:false,
            message:'something went wrong while creating airplane',
            data:{},
            error:error
        });
    }
}

module.exports={
    createAirplane
}