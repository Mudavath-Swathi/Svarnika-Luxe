import { Outlet, useNavigate } from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar";
import AdminTopbar from "../components/AdminTopbar";

const AdminLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex bg-[var(--bg-main)] text-[var(--text-primary)]">

      {/* SIDEBAR */}
      <AdminSidebar onLogout={handleLogout} />

      {/* MAIN CONTENT */}
      <main className="flex-1 min-h-screen">
        <AdminTopbar />

        <section className="px-8 py-10 animate-fadeIn">
          <Outlet />
        </section>
      </main>
    </div>
  );
};

export default AdminLayout;