// const router = require("express").Router();
// const landLord = require ("../models/landLord");
// const CryptoJS = require ("crypto-js");
// const jwt = require("jsonwebtoken");
// const {verifyTokenandFarmerOrAdmin} = require ("./verifyToken")

// //REGISTOR
// router.post("/register", async (req,res)=>{
//     const newFarmer = new landLord({
//         username:req.body.username,
//         email:req.body.email,
//         telephone:req.body.telephone,
//         isFarmer:req.body.isFarmer,
//         title:req.body.title,
//         company:req.body.company,
//         description:req.body.description,
//         password:CryptoJS.AES.encrypt(req.body.password, process.env.SEC_PASS).toString(),
//     });

//     const alreadyExistUser = await Farmer.findOne({email:req.body.email})
//     if(alreadyExistUser){
//         return res.status(409).json({message:'User with this email already exist'})
//     }
//     try{
//         const savedFarmer= await newFarmer.save();        
//         res.status(201).json(savedFarmer);
//     }catch(err){
//         console.log(err);
//         res.status(500).json({message:'Something went wrong!!! We are unable to registor'});
//     }

// });

// //UPDATE ID
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


// //LOGIN
// router.post("/login", async (req,res)=>{
//     const farmer= await Farmer.findOne({email:req.body.email});
//     if(!farmer) {
//         return res.status(401).json({message:"Wrong Email address"});
//     }
//     try{ 
//         const hashedPassword = CryptoJS.AES.decrypt(farmer.password, process.env.SEC_PASS);
//         const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
//         const accessToken = jwt.sign({id: farmer._id,isAdmin: farmer.isAdmin,isFarmer:farmer.isFarmer},process.env.SEC_JWT,{expiresIn:"3d"});     
//         const {password,...others}= farmer._doc;
//         if(OriginalPassword !== req.body.password) {
//             return res.status(401).json({message:"Wrong Password"})
//         } else {
//             res.status(200).json({...others, accessToken});
//         } 
   
//     } catch(err){
//         console.log(err)
//         res.status(500).json({message:'Something went wrong!!!'})
//     }

// });

// module.exports = router