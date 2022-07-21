import express from 'express'
const router = express.Router();
import LandLord from '../Models/LandLord';
import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";
import {verifyToken} from "./VerifyTokens"



//LOGIN
router.post("/login", async (req,res)=>{
    const landLord= await LandLord.findOne({email:req.body.email});
    if(!landLord) {
        return res.status(401).json({message:"Wrong Email address"});
    } else if(!landLord.isAdmin) {
        return res.status(401).json({message:"You are not Admin"}); 
    } else{
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
}
});

module.exports = router