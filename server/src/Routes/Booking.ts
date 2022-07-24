import express from 'express'
const router = express.Router();
import Booking from '../Models/Booking';


const accountSid = process.env.TWILIO_SID
const authToken = process.env.TWILIO_AUTH_TOKEN
const myNumber = process.env.TWILIO_PHONE_NUMBER

const client = require('twilio')(accountSid,authToken)

// Saving Book

router.post('/',async (req, res) => {
    const newBoking = new Booking(req.body);
    try {
        await newBoking.save(); 

        res.header('Content-Type', 'application/json');
        client.messages
          .create({
            body: `Mr/Ms ${req.body.names} had booked you house ${req.body.propertyName} located at ${req.body.propertyAddress} under the transaction number ${req.body.transactionId}. Please check and confirm to him/her the payment on this number ${req.body.number}`,
            from: myNumber,
            to:req.body.landlordNumber        
          })
          .then(() => {
            res.status(200).json({message:'successful'})
          })
          .catch((err:any) => {
            console.log(err);
            res.status(500).json({message:'Something went wrong!!! We are unable to send your request'})
          });

    } catch(err){
        console.log(err)
        res.status(500).json({message:"Something went wrong!!"})
    }
  });



//GET ALL BOOKING HOUSE
router.get("/",async (req:any,res:any)=>{
  try{
      const newBooking =  await Booking.find();
      res.status(200).json(newBooking)
  } catch(err){
      res.status(500).json(err)
  }
})


module.exports = router