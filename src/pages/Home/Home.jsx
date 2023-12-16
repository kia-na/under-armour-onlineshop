import React from "react";
import Header from "../../components/Header/Header";
import ProductsSection from "../../components/ProductsSection/ProductsCard";
import Footer from "../../components/Footer/Footer";
import SideBar from "../../components/Sidebar/SideBar";
import { Outlet, useParams } from "react-router-dom";
import { useState } from "react";
import ProductsCardCategory from "../../components/ProductsSection/ProductsCardCategory";
import ProductsCardSubCategory from "../../components/ProductsCard/ProductsCardSubCategory";

function Home() {
  //PARAMS
  const params = useParams();
  // console.log(params);
  //PARAMS

  //HANDLE SIDEBAR
  const [openSideBar, setOpenSideBar] = useState(false);
  //HANDLE SIDEBAR

  return (
    <div className="h-screen bg-gray-50">
      <Header setOpenSideBar={setOpenSideBar} />
      <div className={`flex justify-start`}>
        <SideBar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
        <div
          className={`w-full gap-2 flex flex-col items-right justify-start `}
        >
          {params.gender === "undefined" ? (
            <ProductsSection />
          ) : params.gender && params.field ? (
            <ProductsCardSubCategory
              category={params.gender}
              subcategory={params.field}
            />
          ) : params.gender ? (
            <ProductsCardCategory />
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
