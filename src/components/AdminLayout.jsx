import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import PropTypes from "prop-types";
import AdminSidebar from "./AdminSidebar";

function AdminLayout({ children }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("access_token")) {
      navigate("/login");
    }
  }, []);
  return (
    <div className="flex h-screen">
      <AdminSidebar />
      <div className="w-[calc(100%-16rem)] overflow-y-auto">{children}</div>
    </div>
  );
}
export default AdminLayout;

AdminLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
