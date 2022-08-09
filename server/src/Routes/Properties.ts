const router = require("express").Router();
const Property = require("../Models/Property");
import {verifyToken} from "./VerifyTokens"


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

// UPDATE PROPERTY
router.put("/:id",verifyToken,async (req:any,res:any)=>{
    try{
        const updatedProduct = await Property.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true});

        res.status(200).json(updatedProduct)
    } catch(err){
        res.status(500).json({message:"Something went wrong"})
        console.log(err)
    }
})

//DELETE PROPERTY
router.delete("/:id",verifyToken,async (req:any,res:any)=>{
    try{
        await Property.findByIdAndDelete(req.params.id)

        res.status(200).json({message:"Property had been deleted"})
    } catch(err){
        res.status(500).json(err)
    }
})

// //GET PRODUCT BY ID
// router.get("/find/:id",async (req:any,res:any)=>{
//     try{
//         const product = await Product.findById(req.params.id)
//         res.status(200).json(product)
//     } catch(err){
//         res.status(500).json(err)
//     }
// })

//GET ALL PROPERTIES
router.get("/",async (req:any,res:any)=>{
    const queryNew = req.query.new;
    const queryDistrict = req.query.district;
    try{
        let products;

        if (queryNew){
            products= await Property.find().sort({createdAt:-1}).limit(1);
        } else if (queryDistrict) {
            products = await Property.find({District:{$in:[queryDistrict]}});
        } else{
            products =  await Property.find();
        }
         
        res.status(200).json(products)
    } catch(err){
        res.status(500).json(err)
    }
})


module.exports = router