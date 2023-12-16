import React from "react";
import { useParams } from "react-router-dom";

function ProductsCardCategory() {
  const params = useParams();
  return (
    <>
      <div className="text-blue-500">FilteredProducts</div>
      <div>{params.gender}</div>
    </>
  );
}

export default ProductsCardCategory;
