const express=require('express');
const { CityController } = require('../../controllers');
const { CityMiddlewares } = require('../../middlewares');

const router=express.Router();

router.post('/',CityMiddlewares.validateCityRequest, CityController.createCityController);
router.get('/',CityController.getAllcityController);
router.delete('/:id',CityController.deleteCityController);

module.exports=router;