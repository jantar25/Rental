import mongoose from "mongoose"


interface BookingInterface extends Document {
    names:string,
    number:number | string,
    transactionId:number | string,
    propertyName:string,
    propertyAddress:string | any,
    landlordNumber:number | string,
    Amount:number | string,
    landlordName:string,
  }
  
const BookingSchima = new mongoose.Schema<BookingInterface>(
    {
        names:{type:String},
        number:{type:String},
        transactionId:{type:String,unique:true},
        propertyName:{type:String},
        propertyAddress:{type:String},
        landlordNumber:{type:Number},
        Amount:{type:Number},
        landlordName:{type:String},
},
{timestamps:true})


const Booking = mongoose.model("Booking",BookingSchima)

export default Booking