import mongoose from "mongoose";



const LandLordSchima = new mongoose.Schema(
    {
        username:{type:String,required:true},
        email:{type:String,required:true,unique:true},
        password:{type:String,required:true},
        isAdmin:{
            type:Boolean,
            default:false
        },
        telephone:{
            type:String,
        },
        description:{
            type:String,
        },
        title:{
            type:String,
        },
        company:{
            type:String,
        },
        isFarmer:{
            type:Boolean,
            default:false
        },
        img:{type:String,
            default:null},

},
{timestamps:true})

module.exports = mongoose.model("landLord",LandLordSchima)