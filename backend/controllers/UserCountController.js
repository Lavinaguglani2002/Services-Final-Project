    const UserModel = require("../model/userModel");

const getUserCount = async (req, res) => {
  try {
    const users = await UserModel.find();
    const filtered = users.filter(u => u.role?.trim().toLowerCase() === "user");
    res.status(200).json({ count: filtered.length });
  } catch (err) {
    res.status(500).json({ message: "Error counting users" });
  }
};

module.exports = {
  getUserCount,
};
