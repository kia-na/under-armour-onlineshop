import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { DashboardLayout, Loadable } from "../components";

// const Dashboard = Loadable(lazy(() => import("../Pages/dashboard/Dashboard")));
// const Customers = Loadable(
//   lazy(() => import("../Pages/dashboard/customers/Customers"))
// );
// const Account = Loadable(
//   lazy(() => import("../Pages/dashboard/account/Account"))
// );

export const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "customers",
        element: <Customers />,
      },
      {
        path: "products",
        element: <div>products</div>,
      },
      {
        path: "account",
        element: <Account />,
      },
    ],
  },
]);
