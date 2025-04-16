const mongoose=require("mongoose")

const orderSchema=new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
      },
      cartItems:[
        {
            name:{
                type:String,
                required:true
            },
            image:{
                type:String,
                required:true
            },
            price:{
                type:Number,
                required:true
            },
            quantity:{
                type:Number,
                required:true
            },
            category:{
                type:String,
                required:false
            },
            // description:{
            //     type:String,
            //     required:true
            // },

        }
      ],
      totalAmount:{
        type:Number,
        required:true
      },
      address:String,
      city:String,
      pincode:String,
            serviceDate:{
        type:Date,
        required:true
      },
      paymentStatus:{
        type:String,
        enum:["Pending","Paid","Failed"],
        default:"Pending"

      },
      deliveryType:{
        type:String
,
enum:["Fast","Slow"],
rerquired:true},      
deliveryDate:{
  type:Date
},
      deliveryStatus:{
        type:String,
        enum:["Pending","Shipped","Delivered"],
        default:"Pending"
      },
      orderDate:{
        type:Date,
        default:Date.now
      },
        deliveryDate:{
            type:Date
        },
})
const OrderModel=mongoose.model("Order",orderSchema)
module.exports=OrderModel;