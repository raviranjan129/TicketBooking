const CrudRepository=require('./crud-repository');
const {Flight}=require('../models')

class FlightRepository extends CrudRepository{    //parent class is CrudRepository and it expects the model;
    constructor(){
        super(Flight);  //using super keyword you can call the constructor of the parent class;
    }

    async getAllFlights(filter){
        const response=await Flight.findAll({
            where:filter
        });
        return response;
    }
}

module.exports=FlightRepository;