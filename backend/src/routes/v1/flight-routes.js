
const express=require('express');

const {  FlightController } = require('../../controllers');
const { FlightMiddlewares } = require('../../middlewares');

const router=express.Router();


router.post('/',FlightMiddlewares.validateFlightRequest,FlightController.createFlightController);
//
router.get('/',FlightController.getAllFlightsController);

module.exports=router;