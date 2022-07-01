const router = require("express").Router();
const Property = require("../models/Property");
import {verifyToken,verifyTokenandAuthorisation,verifyTokenandAdmin} from "./VerifyTokens"


//CREATE PROPERTY
router.post("/",verifyToken,async (req:any,res:any)=>{
    const newProperty = new Property(req.body);
    const alreadyExistPropertyName = await Property.findOne({title:req.body.title})

    if(alreadyExistPropertyName){
        return res.status(409).json({message:'Property with this Title already exist'})
    }
    try {
        const savedProperty = await newProperty.save(); 
        res.status(200).json(savedProperty)
    } catch(err){
        res.status(500).json({message:'Something went wrong!!! We are unable to registor'})
        console.log(err)
    }
})

// // UPDATE PRODUCT
// router.put("/:id",verifyTokenandAuthorisation,async (req:any,res:any)=>{
//     try{
//         const updatedProduct = await Product.findByIdAndUpdate(req.params.id,{
//             $set:req.body
//         },{new:true});

//         res.status(200).json(updatedProduct)
//     } catch(err){
//         res.status(500).json(err)
//     }
// })

// //DELETE PRODUCT
// router.delete("/:id",verifyTokenandAuthorisation,async (req:any,res:any)=>{
//     try{
//         await Product.findByIdAndDelete(req.params.id)

//         res.status(200).json("Product had been deleted")
//     } catch(err){
//         res.status(500).json(err)
//     }
// })

// //GET PRODUCT BY ID
// router.get("/find/:id",async (req:any,res:any)=>{
//     try{
//         const product = await Product.findById(req.params.id)
//         res.status(200).json(product)
//     } catch(err){
//         res.status(500).json(err)
//     }
// })

// //GET ALL PRODUCTS
// router.get("/",async (req:any,res:any)=>{
//     const queryNew = req.query.new;
//     const queryCategory = req.query.category;
//     try{
//         let products;

//         if (queryNew){
//             products= await Product.find().sort({createdAt:-1}).limit(1);
//         } else if (queryCategory) {
//             products = await Product.find({categories:{$in:[queryCategory]}});
//         } else{
//             products =  await Product.find();
//         }
         
//         res.status(200).json(products)
//     } catch(err){
//         res.status(500).json(err)
//     }
// })


module.exports = router