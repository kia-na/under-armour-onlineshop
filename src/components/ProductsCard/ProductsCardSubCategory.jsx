import axios from "axios";
import React, { useEffect, useState } from "react";

import SingleProduct from "../SingleProduct/SingleProduct";
function ProductsCardSubCategory({ category, subcategory }) {
  const [data, setData] = useState([]);
  console.log(category, subcategory);
  useEffect(() => {
    axios(`http://localhost:8000/api/products/`)
      .then((res) => setData(res.data.data.products))
      .then((err) => console.log(err));
  }, []);
  console.log(data);
  return (
    <div className="min-h-[100vh] flex flex-col justify-end items-center gap-2 mt-8">
      <span className="text-gray-500 self-start ml-3 sm:ml-6 md:ml-8">
        {category + " / " + subcategory}
      </span>
      <div className="self-start text-[1.3rem] font-bold ml-3 sm:ml-6 md:ml-8 md:text-[1.4rem] lg:text-[1.6rem]">
        {category + "'s " + subcategory} products
      </div>

      <div className="max-w-[100rem] flex items-center justify-center flex-wrap gap-5 px-3 lg:gap-x-7 gap-y-12 mt-3 sm:mt-6 lg:mt-8">
        {data.map((product) => (
          <SingleProduct {...product} />
        ))}
      </div>
    </div>
  );
}

export default ProductsCardSubCategory;
