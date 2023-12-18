import axios from "axios";
import React, { useEffect, useState, useParams } from "react";

import SingleProductCard from "../SingleProductCard/SingleProductCard";

function ProductsCardSubCategory({ category, subcategory }) {
  // const params = useParams();
  // console.log(params, "d");

  const [data, setData] = useState([]);
  // console.log(category, subcategory);

  useEffect(() => {
    axios(`http://localhost:8000/api/products/`)
      .then((res) => setData(res.data.data.products))
      .then((err) => console.log(err));
  }, []);
  // console.log(data);

  return (
    <div className="min-h-[100vh] max-w-[100rem] mx-auto flex flex-col justify-end items-center gap-2 mt-8">
      <span className="text-gray-500 self-start ml-3 pl-5 sm:ml-6 md:ml-8">
        {category + " / " + subcategory}
      </span>
      <div className="self-start text-[1.3rem] font-bold ml-3 pl-5 sm:ml-6 md:ml-8 md:text-[1.4rem] lg:text-[1.6rem]">
        {category + "'s " + subcategory} products
      </div>

      <div className="max-w-[100rem] flex items-center justify-center flex-wrap gap-5 px-3 lg:gap-x-7 gap-y-12 mt-3 sm:mt-6 lg:mt-8">
        {data.map((product, index) => (
          <SingleProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
}

export default ProductsCardSubCategory;
