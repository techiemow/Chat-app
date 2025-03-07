const express = require("express");
const { Signup } = require("../Controller/Accounts/Signup");

const Router =  express.Router();

Router.post("/Signup" ,  Signup)


Router.get("/Login" , (req,res) =>{
    res.send("Login Route ")
  })

Router.get("/Logout",(req,res)=>{
    res.send("Logout Route")
  })


module.exports = Router