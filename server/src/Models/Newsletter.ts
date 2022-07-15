const mongoose = require ("mongoose")


const NewsletterSchima = new mongoose.Schema(
    {
        email:{type:String,required:true,unique:true},
},
{timestamps:true})

module.exports = mongoose.model("Newsletter",NewsletterSchima)