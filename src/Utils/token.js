const JWt = require("jsonwebtoken")

const generateToken = (userId , res ) =>{
    const token  =  JWt.sign({userId},process.env.JWT_SCERET_KEY,{
        expiresIn:2*60*60
    })

    res.cookie("jwt",token,{
        httpOnly:true,
        sameSite : "strict",
        secure:process.env.NODE_ENV !== "development"

    })
  
    return token
}

module.exports={
    generateToken
}