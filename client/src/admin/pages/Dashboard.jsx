import { useEffect, useState } from "react";
import API from "../../services/api";
import StatsCard from "../components/StatsCard";

const Dashboard = () => {
  const [stats, setStats] = useState({
    products: 0,
    orders: 0,
    revenue: 0,
    lowStock: 0, 
  });

  const [loading, setLoading] = useState(true);

  
  const fetchStats = async () => {
    try {
      const res = await API.get("/admin/stats");

      setStats({
        products: res.data.products,
        orders: res.data.orders,
        revenue: res.data.revenue,
        lowStock: 0, 
      });
    } catch (error) {
      console.error("Failed to load dashboard stats", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading dashboard...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--bg-main)] p-8 animate-fadeIn">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <StatsCard
          title="Total Products"
          value={stats.products}
        />

        <StatsCard
          title="Total Orders"
          value={stats.orders}
        />

        <StatsCard
          title="Revenue"
          value={`₹${stats.revenue.toLocaleString()}`}
        />

        <StatsCard
          title="Low Stock Items"
          value={stats.lowStock}
          valueClass="text-red-400"
        />

      </div>
    </div>
  );
};

export default Dashboard;