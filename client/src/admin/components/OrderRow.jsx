const OrderRow = ({ order }) => {
  return (
    <tr
      className="border-t border-[var(--border-subtle)]
                 hover:bg-[var(--bg-elevated)] transition"
    >
      {/* Order ID */}
      <td className="p-3 text-sm">
        #{order._id.slice(-6)}
      </td>

      {/* Customer */}
      <td className="p-3">
        {order.user?.name || "Guest"}
      </td>

      {/* Email */}
      <td className="p-3 text-sm text-[var(--text-secondary)]">
        {order.user?.email || "-"}
      </td>

      {/* Total */}
      <td className="p-3 font-medium">
        ₹{order.totalAmount.toLocaleString("en-IN")}
      </td>

      {/* Status */}
      <td className="p-3 capitalize">
        <span
          className={`px-3 py-1 rounded-full text-xs
            ${
              order.status === "placed"
                ? "bg-yellow-500/20 text-yellow-400"
                : order.status === "shipped"
                ? "bg-blue-500/20 text-blue-400"
                : order.status === "delivered"
                ? "bg-green-500/20 text-green-400"
                : "bg-gray-500/20 text-gray-400"
            }`}
        >
          {order.status}
        </span>
      </td>

      {/* Date */}
      <td className="p-3 text-sm text-[var(--text-secondary)]">
        {new Date(order.createdAt).toLocaleDateString()}
      </td>
    </tr>
  );
};

export default OrderRow;