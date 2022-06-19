import express from 'express'
const router = express.Router();
import LandLord from '../Models/LandLord';
import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";
// const {verifyTokenandFarmerOrAdmin} = require ("./verifyToken")

//REGISTOR
router.post("/register", async (req,res)=>{
    const newLandLord = new LandLord({
        names:req.body.names,
        email:req.body.email,
        line1:req.body.phone1,
        line2:req.body.phone2,
        password:CryptoJS.AES.encrypt(req.body.password,'name').toString(),
    });

    const alreadyExistUser = await LandLord.findOne({email:req.body.email})
    if(alreadyExistUser){
        return res.status(409).json({message:'User with this email already exist'})
    }
    try{
        const savedLandLord= await newLandLord.save();        
        res.status(201).json(savedLandLord);
    }catch(err){
        console.log(err);
        res.status(500).json({message:'Something went wrong!!! We are unable to registor'});
    }

});

//UPDATE ID
// router.put("/:id",verifyTokenandFarmerOrAdmin,async (req,res)=>{
//     try{
//         const updatedFarmer = await Farmer.findByIdAndUpdate(req.params.id,{
//             $set:req.body
//         },{new:true});

//         res.status(200).json(updatedFarmer)
//     } catch(err){
//         res.status(500).json(err)
//     }
// })


//LOGIN
router.post("/login", async (req,res)=>{
    const landLord= await LandLord.findOne({email:req.body.email});
    if(!landLord) {
        return res.status(401).json({message:"Wrong Email address"});
    }
    try{ 
        const secPass = process.env.SEC_PASS
        const secJwt = process.env.SEC_JWT
        if (typeof secPass === "string") {
            const hashedPassword = CryptoJS.AES.decrypt(landLord.password,secPass);
            const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
            if (typeof secJwt === "string") {
                const landLordData:any = landLord
                const accessToken = jwt.sign({id: landLord._id,isAdmin: landLord.isAdmin},secJwt,{expiresIn:"1d"});     
                const {password,...others} = landLordData._doc;
                if(OriginalPassword !== req.body.password) {
                    return res.status(401).json({message:"Wrong Password"})
                } else {
                    res.status(200).json({...others, accessToken});
                } 
            }
            }
   
    } catch(err){
        console.log(err)
        res.status(500).json({message:'Something went wrong!!!'})
    }

});

module.exports = router