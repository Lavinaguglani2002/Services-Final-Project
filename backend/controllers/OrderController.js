



const UserModel = require("../model/userModel");
const mongoose=require("mongoose");
const OrderModel = require("../model/Order Model");
const SendAdminEmail = require("../utils/SendAdminEmail");
const SendUserEmail = require("../utils/SendUserEmail");



const placeorder = async (req, res) => {
  const { userId, cartItems, totalAmount, address,city,pincode,serviceDate, deliveryType } = req.body;

  if (!userId || !cartItems || cartItems.length === 0 || !serviceDate || !deliveryType) {
    return res.status(400).json({ message: "Invalid order data" });
  }

  try {
    const user = await UserModel.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });


    const order = new OrderModel({
      userId,
      cartItems,
      totalAmount,
      city,
      address,
      pincode,
      serviceDate: new Date(serviceDate),
      deliveryType,
      deliveryStatus: "Pending", 
      deliveryDate: null,      
    });

    await order.save();
    await SendAdminEmail(order, user.email);

    res.status(201).json({ message: "Order placed successfully", order });
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getAllOrders = async (req, res) => {
  try {
    const orders = await OrderModel.find().populate("userId");
    res.status(200).json({ message: "All orders", orders });
  } catch (error) {
    res.status(500).json({ message: "Error fetching orders" });
  }
};

const getOrdersByEmail = async (req, res) => {
  const { email } = req.params;
  try {
    const orders = await OrderModel.find().populate("userId");
    const userOrders = orders.filter(order => order.userId?.email === email);
    res.status(200).json({ message: "User orders fetched", orders: userOrders });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// const updateOrder = async (req, res) => {
//   try {
//     const updated = await OrderModel.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate("userId");

//     if (!updated) return res.status(404).json({ message: "Order not found" });

//     if (updated.userId?.email && req.body.deliveryStatus) {
//       await SendUserEmail(updated.userId.email, updated._id, req.body.deliveryStatus);
//     }

//     res.status(200).json({ message: "Order updated successfully", updated });
//   } catch (error) {
//     console.error("Error updating order:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// };


const updateOrder = async (req, res) => {
  try {
    const order = await OrderModel.findById(req.params.id).populate("userId");

    if (!order) return res.status(404).json({ message: "Order not found" });

    if (req.body.deliveryStatus) {
      order.deliveryStatus = req.body.deliveryStatus;

      if (["Approved", "Shipped"].includes(req.body.deliveryStatus)) {
        const serviceDate = new Date(order.serviceDate);
        const deliveryType = req.body.deliveryType || order.deliveryType;
        const deliveryDays = deliveryType === "Fast" ? 2 : 4;

        const deliveryDate = new Date(serviceDate);
        deliveryDate.setDate(serviceDate.getDate() + deliveryDays);
        order.deliveryDate = deliveryDate;
      } else {
        order.deliveryDate = null;
      }
    }

    if (req.body.deliveryType) {
      order.deliveryType = req.body.deliveryType;
    }

    await order.save();
    console.log("✅ Delivery Date saved:", order.deliveryDate);

    if (order.userId?.email && req.body.deliveryStatus) {
      await SendUserEmail(order.userId.email, order._id, req.body.deliveryStatus);
    }

    res.status(200).json({ message: "Order updated successfully", updated: order });
  } catch (error) {
    console.error("Error updating order:", error);
    res.status(500).json({ message: "Server error" });
  }
};



const getUserOrder = async (req, res) => {
  const userId = req.params.id;
  console.log("📦 Fetching orders for userId:", userId);
  try {

    const orders = await OrderModel.find({
      userId: new mongoose.Types.ObjectId(userId),
    }).populate("userId");
    
    console.log("✅ Orders found:", orders);
    res.status(200).json({ message: "User orders fetched", orders });
  } catch (error) {
    console.error("❌ Error fetching user orders:", error);
    res.status(500).json({ message: "Error fetching user orders" });
  }
};


module.exports = { placeorder, getAllOrders, updateOrder, getOrdersByEmail,getUserOrder };
