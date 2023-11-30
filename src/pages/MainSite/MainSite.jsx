import React from "react";
import Header from "../../components/Header/Header";
import ProductsSection from "../../components/ProductsSection/ProductsSection";
import Footer from "../../components/Footer/Footer";
import SideBar from "../../components/Sidebar/SideBar";
import { Outlet, useParams } from "react-router-dom";
import { useState } from "react";
import FilteredProducts from "../../FilteredProducts";

function MainSite() {
  //PARAMS
  const params = useParams();
  //PARAMS

  //HANDLE SIDEBAR
  const [openSideBar, setOpenSideBar] = useState(false);
  //HANDLE SIDEBAR

  return (
    <div className="relative">
      <Header setOpenSideBar={setOpenSideBar} />
      <div className={`flex justify-start bg-red-300`}>
        <SideBar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
        <div
          className={`w-3/4 gap-2 flex flex-col items-right justify-start  ${
            openSideBar ? "hidden lg:inline" : "w-full"
          } `}
        >
          {params.gender ? (
            <FilteredProducts />
          ) : params.gender === "undefined" ? (
            <ProductsSection openSideBar={openSideBar} />
          ) : (
            <Outlet />
          )}
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default MainSite;
