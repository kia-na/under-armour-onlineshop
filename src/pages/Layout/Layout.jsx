import React from "react";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="bg-gray-200">
      <Outlet />
    </div>
  );
}

export default Layout;
