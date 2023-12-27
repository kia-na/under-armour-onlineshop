import React from "react";
import Header from "../../components/Header/Header";
import ProductsSection from "../../components/ProductsSection/ProductsCard";
import FooterSec from "../../components/Footer/Footer";
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
    <div className="min-h-screen bg-gray-50">
      <Header setOpenSideBar={setOpenSideBar} />
      <div className={` gap-2 flex flex-col items-right justify-center`}>
        <SideBar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
        <div
          className={`w-full min-h-screen gap-2 flex flex-col items-right justify-start mt-20`}
        >
          {params.gender === "undefined" ? (
            <ProductsSection />
          ) : params.gender && params.field ? (
            <ProductsCardSubCategory
              category={params.gender}
              subcategory={params.field}
            />
          ) : params.gender ? (
            <ProductsCardCategory category={params.gender} />
          ) : (
            <Outlet />
          )}
        </div>
      </div>
      <FooterSec />
    </div>
  );
}

export default Home;
