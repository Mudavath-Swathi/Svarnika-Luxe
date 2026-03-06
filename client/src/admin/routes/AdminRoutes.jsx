import { Routes, Route, Navigate } from "react-router-dom";

import AdminLayout from "../layout/AdminLayout";
import AdminDashboard from "../pages/Dashboard";
import AdminProducts from "../pages/AdminProducts";
import AddProduct from "../pages/AddProduct";
import EditProduct from "../pages/EditProduct";
import AdminOrders from "../pages/Orders";
import AdminLogin from "../pages/AdminLogin";

const AdminRoutes = () => {
  return (
    <Routes>

      {/* 🔓 PUBLIC ADMIN LOGIN */}
      <Route path="/admin/login" element={<AdminLogin />} />

      {/* 🔒 PROTECTED ADMIN AREA */}
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="products" element={<AdminProducts />} />
        <Route path="add-product" element={<AddProduct />} />
        <Route path="edit-product/:id" element={<EditProduct />} />
        <Route path="orders" element={<AdminOrders />} />
      </Route>

      {/* fallback */}
      <Route path="*" element={<Navigate to="/admin" replace />} />

    </Routes>
  );
};

export default AdminRoutes;