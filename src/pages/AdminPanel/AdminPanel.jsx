import React, { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import AppRoutes from "../../router/routes";
import { Navigate } from "react-router-dom";
function AdminPanel() {
  const [active, setActive] = useState("orders");
  const navigate = useNavigate();

  //CASE REFRESH THE PAGE BACK TO DEFAULT RENDER SECTION (ORDERS)
  useEffect(() => {
    navigate(`${AppRoutes.HOME}${AppRoutes.ADMINPANEL}`);
  }, []);

  return (
    <div className="h-screen p-5 flex flex-col justify-start items-center bg-[#f0f0f0] sm:pt-10 lg:pt-16">
      <div className=" flex justify-between items-center p-2 w-5/6">
        <span className="h-[1rem] font-bold flex items-center justify-between w-full gap-2">
          <Link
            to={AppRoutes.HOME}
            className=" text-xs z-10 text-black  flex items-center  cursor-pointer  "
          >
            <span className="sm:text-lg md:tex-xl ml-1 md:ml-2 lg:ml-3 flex justify-between items-center ">
              <svg
                className="text-black w-6  sm:w-8 h-6 sm:h-8 md:w-15  mr-1 md:mr-2 lg:mr-3 "
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M15.954 12a17.23 17.23 0 0 1-.324.233c-.826.585-2.023.985-3.58.985h-.104c-1.556 0-2.755-.4-3.58-.985A36.43 36.43 0 0 1 8.042 12c.09-.067.196-.143.324-.234c.825-.584 2.024-.985 3.58-.985h.104c1.557 0 2.756.401 3.58.985c.129.09.235.167.325.234M24 7.181s-.709-.541-2.95-1.365c-1.968-.721-3.452-.883-3.452-.883l.006 4.243c0 .598-.162 1.143-.618 1.765c-1.672-.61-3.254-.985-4.981-.985c-1.728 0-3.308.375-4.98.985c-.457-.619-.62-1.168-.62-1.765l.007-4.243s-1.494.16-3.463.883C.709 6.642 0 7.181 0 7.181c.093 1.926 1.78 3.638 4.435 4.82C1.777 13.18.09 14.887 0 16.818c0 0 .709.54 2.949 1.365c1.968.721 3.453.883 3.453.883l-.007-4.244c0-.597.164-1.143.619-1.764c1.672.61 3.252.983 4.98.983c1.727 0 3.309-.374 4.98-.983c.457.62.62 1.167.62 1.764l-.006 4.244s1.484-.16 3.452-.883c2.241-.826 2.95-1.365 2.95-1.365c-.093-1.927-1.78-3.64-4.435-4.819c2.657-1.182 4.343-2.888 4.435-4.82"
                />
              </svg>
              <span className="lg:text-2xl">Home</span>
            </span>
          </Link>
          <span className="text-xs text-black sm:text-xl"> ADMIN PANEL</span>
        </span>
      </div>
      <div className="p-5 sm:mt-2 md:mt-3 text-[.8rem] sm:text-[1rem] sm:p-7 h-[1rem] font-bold text-[#fff] bg-black w-full lg:w-11/12 h-1/10 rounded-xl md:text-xl md:rounded-[1rem] md:p-9 lg:p-12 lg:text-2xl shadow-form-sm md:shadow-form gap-4 flex justify-around items-center">
        <NavLink
          to={`${AppRoutes.HOME}${AppRoutes.ADMINPANEL}${AppRoutes.ORDERS}`}
          onClick={() => setActive("orders")}
          className={`cursor-pointer  ${
            active === "orders" ? "border-b-2" : ""
          }`}
        >
          Orders
        </NavLink>
        <NavLink
          to={`${AppRoutes.HOME}${AppRoutes.ADMINPANEL}${AppRoutes.PRICES}`}
          onClick={() => setActive("Prices")}
          className={`cursor-pointer ${
            active === "Prices" ? "border-b-2" : ""
          }`}
        >
          Inventory
        </NavLink>
        <NavLink
          to={`${AppRoutes.HOME}${AppRoutes.ADMINPANEL}${AppRoutes.PRODUCTS}`}
          onClick={() => setActive("Products")}
          className={`cursor-pointer ${
            active === "Products" ? "border-b-2" : ""
          }`}
        >
          Products
        </NavLink>
      </div>

      <Outlet />
    </div>
  );
}

export default AdminPanel;
