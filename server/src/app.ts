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
const adminRoute = require('./Routes/AdminAuth')


if (typeof dbUrl === 'string') {
    mongoose.connect(dbUrl)
    .then(()=>console.log("DB Connected"))
    .catch((err)=>console.log(err))
}


app.use(cors());
app.use(express.json());
app.use("/api/landLordAuth",landLordRoute)
app.use("/api/admin",adminRoute)
app.use("/api/property",propertyRoute)
app.use("/api/newsletter",newsletterRoute)
app.post('/api/messages', (req, res) => {
    res.header('Content-Type', 'application/json');
    client.messages
      .create({
        body: `Mr/Ms ${req.body.names} had book you house ${req.body.propertyName} located at ${req.body.propertyAddress} under the transaction number ${req.body.transactionId}.
        Please check and confirm to him/her the payment on this number ${req.body.number}`,
        from: myNumber,
        to:req.body.landlordNumber        
      })
      .then(() => {
        res.status(200).json({message:'susccessful'})
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