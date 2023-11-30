import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
function AdminPanel() {
  return (
    <div className="border-4 p-2 mt-4 flex flex-col gap-4 items-center justify-center">
      <div className="flex gap-4">
        <span className="text-blue-500">AdminPanel</span>
        <Link to="/underarmour">
          <img src="/Favicon.webp" alt="siteLogo" className="w-8" />
        </Link>
      </div>
      <div className="flex gap-4">
        <NavLink to="orders" className="text-red-500 underline">
          orders
        </NavLink>
        <NavLink to="prices" className="text-red-500 underline">
          prices
        </NavLink>
        <NavLink to="products" className="text-red-500 underline">
          products
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}

export default AdminPanel;
