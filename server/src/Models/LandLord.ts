import mongoose from "mongoose"

interface LandLordInterface extends Document {
    names: string;
    email: string;
    password: string;
    isAdmin: boolean;
    line1: number | string;
    line2: number | string;
    img: string;
  }
  
const LandLordSchima = new mongoose.Schema<LandLordInterface>(
    {
        names:{type:String,},
        email:{type:String,unique:true},
        password:{type:String},
        isAdmin:{
            type:Boolean,
            default:false
        },
        line1:{
            type:String,
        },
        line2:{
            type:String,
        },
        img:{type:String,
            default:null},
},
{timestamps:true})

const LandLord = mongoose.model("LandLord",LandLordSchima)

export default LandLord