import React from "react";
import { Link } from "react-router-dom";
function AdminLoginForm() {
  return (
    <div className="border-4 h-20 pt-3 mt-4">
      <div className="text-blue-500">AdminLoginForm</div>
      <button>
        <Link to="/underarmour/admin-panel" className="text-red-500 underline">
          Login
        </Link>
      </button>
    </div>
  );
}

export default AdminLoginForm;
