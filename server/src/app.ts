import express from 'express'
const app = express();
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
const landLordRoute = require('./Routes/LandLordAuth')
const propertyRoute = require('./Routes/Properties')


dotenv.config();
const dbUrl = process.env.MONGODB_URL

if (typeof dbUrl === 'string') {
    mongoose.connect(dbUrl)
    .then(()=>console.log("DB Connected"))
    .catch((err)=>console.log(err))
}


app.use(cors());
app.use(express.json());
app.use("/api/landLordAuth",landLordRoute)
app.use("/api/property",propertyRoute)
app.get("/",(req,res)=>{
    res.send("Hello, Welcom to Rental API")
});

app.listen(process.env.PORT || 5000,()=>{
    console.log("BackEnd Server is running on port 5000")
})