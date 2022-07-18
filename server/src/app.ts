import express from 'express'
const app = express();
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"

dotenv.config();

const dbUrl = process.env.MONGODB_URL
const accountSid = process.env.TWILIO_SID
const authToken = process.env.TWILIO_AUTH_TOKEN
const myNumber = process.env.TWILIO_PHONE_NUMBER

const client = require('twilio')(accountSid,authToken)
const landLordRoute = require('./Routes/LandLordAuth')
const propertyRoute = require('./Routes/Properties')
const newsletterRoute = require('./Routes/Newsletter')


if (typeof dbUrl === 'string') {
    mongoose.connect(dbUrl)
    .then(()=>console.log("DB Connected"))
    .catch((err)=>console.log(err))
}


app.use(cors());
app.use(express.json());
app.use("/api/landLordAuth",landLordRoute)
app.use("/api/property",propertyRoute)
app.use("/api/newsletter",newsletterRoute)
app.post('/api/messages', (req, res) => {
    res.header('Content-Type', 'application/json');
    client.messages
      .create({
        body: req.body.body,
        from: myNumber,
        to:req.body.to        
      })
      .then(() => {
        res.status(200).json({message:'Request sent Susccessfully'})
      })
      .catch((err:any) => {
        console.log(err);
        res.status(500).json({message:'Something went wrong!!! We are unable to send your request'})
      });
  });

app.get("/",(req,res)=>{
res.send("Hello, Welcom to Rental API")
});

app.listen(process.env.PORT || 5000,()=>{
    console.log("BackEnd Server is running on port 5000")
})