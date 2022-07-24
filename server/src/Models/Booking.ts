import mongoose from "mongoose"


interface BookingInterface extends Document {
    names:string,
    number:number | string,
    transactionId:number | string,
    propertyName:string,
    propertyAddress:string | any,
    landlordNumber:number | string,
    landlordName:string,
  }
  
const BookingSchima = new mongoose.Schema<BookingInterface>(
    {
        names:{type:String,required:true},
        number:{type:String,required:true},
        transactionId:{type:String,required:true,unique:true},
        propertyName:{type:String,required:true},
        propertyAddress:{type:String,required:true},
        landlordNumber:{type:Number,required:true},
        landlordName:{type:String,required:true},
},
{timestamps:true})


const Booking = mongoose.model("Booking",BookingSchima)

export default Booking