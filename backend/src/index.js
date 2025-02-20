const {ServerConfig}=require('./config')
const express =require('express');
const apiRoutes=require('./routes');



const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/api',apiRoutes);


app.listen(ServerConfig.PORT,()=>{
    console.log(`Successfully started the server on port:${ServerConfig.PORT}`);
    
})