import User from "../models/User.js";
import Product from "../models/Product.js";
import Order from "../models/Order.js";


export const getAdminStats = async (req, res) => {
  try {
    const usersCount = await User.countDocuments({ role: "user" });
    const productsCount = await Product.countDocuments();
    const ordersCount = await Order.countDocuments();

    const totalRevenue = await Order.aggregate([
      { $group: { _id: null, total: { $sum: "$totalAmount" } } }
    ]);

    res.json({
      users: usersCount,
      products: productsCount,
      orders: ordersCount,
      revenue: totalRevenue[0]?.total || 0,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({ role: "user" }).select("-password");
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};