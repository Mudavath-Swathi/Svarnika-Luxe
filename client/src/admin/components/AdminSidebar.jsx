import { NavLink } from "react-router-dom";
import { LayoutDashboard, Package, ShoppingBag, LogOut } from "lucide-react";

const AdminSidebar = ({ onLogout }) => {
  return (
    <aside className="w-64 border-r border-[var(--border-subtle)] bg-[var(--bg-surface)] flex flex-col">

      {/* Brand */}
      <div className="h-20 flex items-center justify-center border-b border-[var(--border-subtle)]">
        <h1 className="text-xl tracking-wide brand">Svarnika Admin</h1>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-4 py-6 space-y-2 text-sm">

        <NavLink
          to="/admin"
          end
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg transition
            ${isActive
              ? "bg-[var(--bg-elevated)] text-white"
              : "text-[var(--text-secondary)] hover:bg-[var(--bg-elevated)]"
            }`
          }
        >
          <LayoutDashboard size={18} />
          Dashboard
        </NavLink>

        <NavLink
          to="/admin/products"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg transition
            ${isActive
              ? "bg-[var(--bg-elevated)] text-white"
              : "text-[var(--text-secondary)] hover:bg-[var(--bg-elevated)]"
            }`
          }
        >
          <Package size={18} />
          Products
        </NavLink>

        <NavLink
          to="/admin/orders"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg transition
            ${isActive
              ? "bg-[var(--bg-elevated)] text-white"
              : "text-[var(--text-secondary)] hover:bg-[var(--bg-elevated)]"
            }`
          }
        >
          <ShoppingBag size={18} />
          Orders
        </NavLink>
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-[var(--border-subtle)]">
        <button
          onClick={onLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg
                     text-[var(--text-secondary)] hover:bg-[var(--bg-elevated)] transition"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;