import React from "react";
import { Outlet } from "react-router-dom";
import "./AdminLayout.css"; // Optional: for any additional styling
import Sidebar from "../Sidebar/Sidebar";

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <Sidebar />
      <div className="admin-content">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
