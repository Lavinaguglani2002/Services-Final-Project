const mongoose=require("mongoose")
const otpSchema=new mongoose.Schema({
 phone:{
    type:String,required:true,

 },
 code:{
    type:String,
    required:true,

 },
 createdAt:{
    type:Date,
    default:Date.now,
    expires:'2m'
 }
    
})
const OtpModel=mongoose.model("Otp",otpSchema)
module.exports=OtpModel