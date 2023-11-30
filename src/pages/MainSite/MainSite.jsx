import React from "react";
import Header from "../../components/Header/Header";
import ProductsSection from "../../components/ProductsSection/ProductsSection";
import Footer from "../../components/Footer/Footer";
import SideBar from "../../components/Sidebar/SideBar";
import { Outlet, useParams } from "react-router-dom";

import FilteredProducts from "../../FilteredProducts";

function MainSite() {
  const params = useParams();
  return (
    <>
      {/* <span className="text-blue-500">MainSite</span> */}
      <Header />
      <div className="flex justify-between mt-5">
        <SideBar />
        <div className="w-3/4 border-4 gap-2 flex flex-col ">
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
    </>
  );
}

export default MainSite;
