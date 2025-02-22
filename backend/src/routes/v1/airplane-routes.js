const express=require('express');
const {AirplaneController}=require('../../controllers')
const {AirplaneMiddlewares}=require('../../middlewares')

const router=express.Router();


//  /api/v1/airplanes -> POST req
router.post('/',AirplaneMiddlewares.validateCreateRequest,AirplaneController.createAirplane);
router.get('/',AirplaneController.getAirplanes);
// /api/v1/airplanes/:id ->get
router.get('/:id',AirplaneController.getAirplaneByIdController);

module.exports=router;

