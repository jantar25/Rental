import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
const app = express();

dotenv.config();

mongoose.connect(process.env.MONGODB_URL)
.then(()=>console.log("DB Connected"))
.catch((err)=>console.log(err))

app.get("/",(req,res)=>{
    res.send("Hello, Welcom to Rental API")
});

app.listen(process.env.PORT || 5000,()=>{
    console.log("Server is running on port 5000")
})
