import express from 'express'
const router = express.Router();
import LandLord from '../Models/LandLord';
import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";
import {verifyToken} from "./VerifyTokens"

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

// UPDATE ID

router.put("/:id",verifyToken,async (req,res)=>{
    try{
        const updatedFarmer = await LandLord.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true});

        res.status(200).json(updatedFarmer)
    } catch(err){
        res.status(500).json(err)
    }
})


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


// //DELETE ID
// router.delete("/:id",verifyTokenandAuthorisation,async (req,res)=>{
//     try{
//         await User.findByIdAndDelete(req.params.id)

//         res.status(200).json("User had been deleted")
//     } catch(err){
//         res.status(500).json(err)
//     }
// })

//GET USER BY ID
router.get("/find/:id",async (req,res)=>{
    try{
        const landLord:any = await LandLord.findById(req.params.id)
        if(landLord){
            const {password,...others}= landLord._doc;
            res.status(200).json(others)
        }
    } catch(err){
        res.status(500).json(err)
    }
})

// //GET ALL USER
// router.get("/",verifyTokenandAdmin,async (req,res)=>{
//     const query = req.query.new
//     try{
//         const users = query ? await User.find().sort({_id:-1}).limit(5) : await User.find(req.params.id)
//         res.status(200).json(users)
//     } catch(err){
//         res.status(500).json(err)
//     }
// })

// //GET USER STATS
// router.get("/stats",verifyTokenandAdmin,async (req,res)=>{
//     const date = new Date();
//     const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
//     try {
//         const data = await User.aggregate([
//             { $match: { createdAt:{ $gte:lastYear}}},
//             { $project: {month:{$month:"$createdAt"}}},
//             { $group:{_id:"$month",total:{$sum:1}}},
//         ]);
//         res.status(200).json(data)
        
//     } catch(err){
//         res.status(500).json(err)
//     }
// })

module.exports = router