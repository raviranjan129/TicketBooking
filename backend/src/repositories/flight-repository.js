const CrudRepository=require('./crud-repository');
const {Flight,Airplane,Airport,City}=require('../models')
const {Sequelize}=require('sequelize');
class FlightRepository extends CrudRepository{    //parent class is CrudRepository and it expects the model;
    constructor(){
        super(Flight);  //using super keyword you can call the constructor of the parent class;
    }

    async getAllFlights(filter,sort){
        const response=await Flight.findAll({
            where:filter,
            order:sort,
            include:[
                {
                model:Airplane,
                required:true,
                as:'airplaneDetail'
            },
            {
                model:Airport,
                required:true,
                as:'departureAirport',
                on:{
                  col1:Sequelize.where(Sequelize.col('Flight.departureAirportId'),"=",Sequelize.col('departureAirport.code'))
                },
                include:{
                    model:City,
                    required:true
                }
            },
            {
                model:Airport,
                required:true,
                as:'arrivalAirport',
                on:{
                  col1:Sequelize.where(Sequelize.col('Flight.arrivalAirportId'),"=",Sequelize.col('arrivalAirport.code'))
                },
                include:{
                    model:City,
                    required:true
                }
            }
        ]
        });
        return response;
    }
}

module.exports=FlightRepository;