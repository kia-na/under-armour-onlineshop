import React from "react";
import { useParams } from "react-router-dom";

function FilteredProducts() {
  const params = useParams();
  return (
    <>
      <div className="text-blue-500">FilteredProducts</div>
      <div>{params.gender}</div>
    </>
  );
}

export default FilteredProducts;
