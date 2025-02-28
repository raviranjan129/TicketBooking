
const express=require('express');
const { AirportController } = require('../../controllers');
const { AirportMiddlewares } = require('../../middlewares');

const router=express.Router();

router.post('/',AirportMiddlewares.validateAirportRequest, AirportController.createAirportController);


module.exports=router;