import React from "react";
import { useParams } from "react-router-dom";

function ProductsSection({ openSideBar }) {
  // const params = useParams();
  // console.log(params.gender);
  return (
    <div className={`w-full  h-20 flex flex-col items-start justify-start `}>
      <div className=" text-blue-500">ProductsSection</div>
      <div>all ptoducts</div>
    </div>
  );
}

export default ProductsSection;
