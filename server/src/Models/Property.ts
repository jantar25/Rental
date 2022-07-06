import mongoose from "mongoose"

type OwnerDetails = {
    names: string;
    email: string;
    password: string;
    isAdmin: boolean;
    line1: number | string;
    line2: number | string;
    img: string;
}

interface PropertyInterface extends Document {
    title: string,
    address: string |any,
    coordinates: string |any,
    price: number | string,
    OtherImages: any,
    Bedroom: number,
    BathRooms: number,
    Kitchen: number,
    Livingrooms:number,
    Floors: number,
    Avaiable: boolean,
    District: string,
    Description: string | any,
    OwnerDetails: OwnerDetails,
  }
  
const PropertySchima = new mongoose.Schema<PropertyInterface>(
    {
        title:{type:String,required:true,unique:true},
        address:{type:String,required:true},
        coordinates:{type:Array},
        price:{type:Number,required:true},
        Bedroom:{type:Number},
        BathRooms:{type:Number},
        Kitchen:{type:Number},
        Livingrooms:{type:Number},
        Floors:{type:Number},
        District:{type:String},
        Description:{type:String},
        Avaiable:{type:Boolean,
            default:true},
        OwnerDetails:{type:Array},
        OtherImages:{type:Array},
},
{timestamps:true})

module.exports = mongoose.model("Property",PropertySchima)

