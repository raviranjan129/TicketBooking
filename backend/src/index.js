const {ServerConfig}=require('./config')
const express =require('express');
const apiRoutes=require('./routes');



const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/api',apiRoutes);


app.listen(ServerConfig.PORT,async()=>{
    console.log(`Successfully started the server on port:${ServerConfig.PORT}`);

    // const {City,Airport}=require('./models');
    // const city=await City.findByPk(7);
    // console.log(city);
    
    // const airport= await Airport.create({name:'patna Airport',code:'ptn',cityId:7})

    // const airport=await city.createAirport({name:'Apollo Pharamacy Chennai International Airport',code:'ACIA'})
    // console.log(airport);

//   const allAirportOfChennai=await airport.getAirports();
//   console.log(allAirportOfChennai);

//    const city=await City.findByPk(1);
//    console.log(city);
//  await city.createAirport({name:"Apllo Pharmacy Chennai International Airport",code:'AP'});
// await City.destroy({
//     where:{
//         id:1
//     }
// })
})