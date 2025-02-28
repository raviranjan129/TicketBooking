
const express=require('express');
const { AirportController } = require('../../controllers');
const { AirportMiddlewares } = require('../../middlewares');

const router=express.Router();

router.post('/',AirportMiddlewares.validateAirportRequest, AirportController.createAirportController);
router.get('/',AirportController.getAirport);
router.get('/:id',AirportController.getAirportByIdController);
router.patch('/:id',AirportMiddlewares.validateAirportRequest, AirportController.updateAirportController);

module.exports=router;