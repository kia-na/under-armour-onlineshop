import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="flex flex-col items-center justify-center gap-1 pt-1 h-20 border-4  ">
      <span className="text-blue-500">Header</span>
      <div>
        <Link
          to="/underarmour/admin-login-form"
          className="underline text-red-500 mr-6"
        >
          ADMIN PANEL
        </Link>
        <Link to="/underarmour/orders" className="underline text-red-500">
          Orders
        </Link>
      </div>
    </div>
  );
}

export default Header;
