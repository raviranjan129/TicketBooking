
const express=require('express');

const {  FlightController } = require('../../controllers');
const { FlightMiddlewares } = require('../../middlewares');

const router=express.Router();


router.post('/',FlightMiddlewares.validateFlightRequest,FlightController.createFlightController);
//
router.get('/',FlightController.getAllFlightsController);
router.get('/:id',FlightController.getFlightController);
router.patch('/:id/seats',FlightMiddlewares.validateUpdateSeatsRequest,FlightController.updateSeatsController)

module.exports=router;