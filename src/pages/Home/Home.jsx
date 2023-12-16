import React from "react";
import Header from "../../components/Header/Header";
import ProductsSection from "../../components/ProductsSection/ProductsSection";
import Footer from "../../components/Footer/Footer";
import SideBar from "../../components/Sidebar/SideBar";
import { Outlet, useParams } from "react-router-dom";
import { useState } from "react";
import FilteredProducts from "../../components/ProductsSection/FilteredProducts";

function Home() {
  //PARAMS
  const params = useParams();
  //PARAMS

  //HANDLE SIDEBAR
  const [openSideBar, setOpenSideBar] = useState(false);
  //HANDLE SIDEBAR

  return (
    <div className="h-screen bg-red-500">
      <Header setOpenSideBar={setOpenSideBar} />
      <div className={`flex justify-start`}>
        <SideBar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
        <div
          className={`w-full gap-2 flex flex-col items-right justify-start `}
        >
          {params.gender ? (
            <FilteredProducts />
          ) : params.gender === "undefined" ? (
            <ProductsSection />
          ) : (
            <Outlet />
          )}
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
