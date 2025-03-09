const { generateToken } = require("../../Utils/token")
const { UserModel } = require("../../Model/UserModel")
const bcryptjs = require("bcryptjs")

const Signup = async(req,res) =>{

    const {email , fullname , phonenumber ,password , profilePic } = req.body

    try{
        if(!email || !fullname || !phonenumber || !password){
            return res.status(400).json({message:"Fill all the blanks"})

        }
        if(password.length < 6){
            return res.status(400).json({message:"Password must be atleast 6 characters"})
        }
       
         const user = await UserModel.findOne({email})

         if(user){
            return res.status(400).json({message:"Email already exist"})
        }

        const salt = await bcryptjs.genSalt(10)
        const hashedpassword = await bcryptjs.hash(password,salt)

        const newUser =  new UserModel({
            fullname,
            email,
            password:hashedpassword,
            phonenumber,
            profilePic
        })
        if(newUser){
           generateToken(newUser._id,res)
        
            const user = await newUser.save()

           res.status(200).json({
            data:user,
            message:"User created successfully",
            success:true,
            error:false
           })
        }else{
            res.status(400).json({
    
                message:"User cannot be created",
                success:false,
                error:true
               })

        }
    }
    catch (err) {
        res.json({
            message: err.message || err,
            success: false,
            error: true
        });
    }

}


module.exports={
    Signup
}