import { useEffect, useState } from "react";
import API from "../../services/api";
import OrderRow from "../components/OrderRow";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    try {
      const res = await API.get("/orders");
      setOrders(res.data);
    } catch {
      alert("Failed to fetch orders");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading orders...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--bg-main)] px-6 py-10 animate-fadeIn">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-serif">Orders</h1>
          <p className="text-sm text-[var(--text-secondary)]">
            View all customer orders
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border border-[var(--border-subtle)] rounded-lg overflow-hidden">
            <thead className="bg-[var(--bg-elevated)] text-sm">
              <tr>
                <th className="p-3 text-left">Order ID</th>
                <th className="p-3 text-left">Customer</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Total</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Date</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order) => (
                <OrderRow key={order._id} order={order} />
              ))}
            </tbody>
          </table>
        </div>

        {orders.length === 0 && (
          <p className="text-center mt-12 text-[var(--text-muted)]">
            No orders found
          </p>
        )}
      </div>
    </div>
  );
};

export default Orders;