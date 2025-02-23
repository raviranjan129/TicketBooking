const express=require('express');
const { cityController } = require('../../controllers/city-controller');

const router=express.Router();

router.post('/',cityController);

module.exports=router;