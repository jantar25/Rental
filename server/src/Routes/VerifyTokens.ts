const jwt = require("jsonwebtoken");

export const verifyToken = (req:any,res:any,next:any)=>{
    const authHeader=req.headers.token;
    
    if (authHeader) {
        const token=authHeader.split(" ")[1];
        jwt.verify(token,process.env.SEC_JWT,(error:any,user:any)=>{
            if(error) return res.status(403).json("Token is invalid!");
            req.user=user;
            next();
        })
    } else {
        return res.status(401).json("You are not Authenticated!");
    }
}

export const verifyTokenandAuthorisation = (req:any,res:any,next:any)=>{
    verifyToken(req,res,()=>{
        if(req.user.id === req.params.id || req.user?.isAdmin){
            next();
        } else {
            return res.status(403).json("You are no allowed to do that!")
        }
    })
}

export const verifyTokenandAdmin = (req:any,res:any,next:any)=>{
    verifyToken(req,res,()=>{
        if(req.user?.isAdmin){
            next();
        } else {
            return res.status(403).json("You are not admin!")
        }
    })
}






