const CrudRepository=require('./crud-repository');
const {Flight}=require('../models')

class FlightRepository extends CrudRepository{    //parent class is CrudRepository and it expects the model;
    constructor(){
        super(Flight);  //using super keyword you can call the constructor of the parent class;
    }
}

module.exports=FlightRepository;