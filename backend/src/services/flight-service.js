const { StatusCodes } = require("http-status-codes");
const { FlightsRepository } = require("../repositories");
const {Op}=require('sequelize');
const AppError = require("../utils/errors/app-error");

const flightRepository = new FlightsRepository();

async function createFlight(data) {
    try {
        const flight = await flightRepository.create(data);
        //implement compare timedate

        return flight;
    } catch(error) {
        if(error.name == 'SequelizeValidationError') {
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create a new Flight object', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAllFlights(query) {
    let customFilter={};
    const endingTripTime="23:59:00";
    let sortFilter=[];
    //trips=MUM-DEL

    if(query.trips){
        [departureAirportId,arrivalAirportId]=query.trips.split("-");
        customFilter.departureAirportId=departureAirportId;
        customFilter.arrivalAirportId=arrivalAirportId;

        //TODO: add a check that they are not same(arrival,departure)
    }
    if(query.price){             //it will find the flights between the given range;
        [minPrice,maxPrice]=query.price.split("-");
        customFilter.price={
            [Op.between]:[minPrice,((maxPrice == undefined)?20000:maxPrice)] // if the max price will not given then default it will take 20k;
        }
    }

    if(query.travellers){     // flights details will come if nd only if the seats aval for required passengers demand;
        customFilter.totalSeats={
            [Op.gte]:query.travellers
        }
    }

    if(query.tripDate) {
        customFilter.departureTime = {
            [Op.between]: [query.tripDate, query.tripDate+ " 23:59:00 "]
        }
    }

    if(query.sort){
        const params=query.sort.split(',');
        const sortFilters=params.map((param)=>param.split('_'));
        sortFilter=sortFilters
    }

    try {
        const flights=await flightRepository.getAllFlights(customFilter,sortFilter);
        return flights;
    } catch (error) {
        throw new AppError('Cannot fetch data of all the flights',StatusCodes.INTERNAL_SERVER_ERROR);
        
    }
    
}

module.exports={
    createFlight,
    getAllFlights,

}