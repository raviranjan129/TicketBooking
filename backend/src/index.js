import { PORT } from "./config/index.js";
import express from 'express';


const app = express();


app.listen(PORT,()=>{
    console.log(`Successfully started the server on port:${PORT}`);
})