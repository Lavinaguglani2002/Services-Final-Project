
const userModel= require("../model/userModel");
const Blogmodel=require("../model/BlogModel")
const OrderModel=require("../model/Order Model")

const getUserCount = async (req, res) => {
  // try {
  //   const userCount = await User.countDocuments({ role: "user" });
  //   res.status(200).json({ count: userCount });
  // } catch (err) {
  //   res.status(500).json({ message: "Error counting users" });
  // }
  try {
    const users = await userModel.find();
    const filtered = users.filter(u => u.role?.trim().toLowerCase() === "user");
    res.status(200).json({ count: filtered.length });
  } catch (err) {
    res.status(500).json({ message: "Error counting users" });
  }
};

// GET total number of blogs


const countBlogs = async (req, res) => {
  try {
    const count = await Blogmodel.countDocuments();
    res.json({ count });
  } catch (error) {
    res.status(500).json({ message: "Error counting blogs", error });
  }
};

const getOrderStatusCount = async (req, res) => {
  try {
    const counts = await OrderModel.aggregate([
      {
        $group: {
          _id: "$deliveryStatus",
          count: { $sum: 1 }
        }
      }
    ]);

    // Convert to object: {Pending: 4, Shipped: 3, Delivered: 2, Rejected: 1}
    const result = {
      Pending: 0,
      Shipped: 0,
      Delivered: 0,
      Rejected: 0
    };

    counts.forEach((item) => {
      result[item._id] = item.count;
    });

    res.json(result);
  } catch (error) {
    console.error("Error getting status count:", error);
    res.status(500).json({ message: "Server Error" });
  }
};






module.exports = {
  getUserCount,countBlogs,getOrderStatusCount
}