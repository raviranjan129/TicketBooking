
const CrudRepository=require('./crud-repository');
const {Airplane}=require('../models')

class AirplaneRepository extends CrudRepository{    //parent class is CrudRepository and it expects the model;
    constructor(){
        super(Airplane);  //using super keyword you can call the constructor of the parent class;
    }
}

module.exports=AirplaneRepository;