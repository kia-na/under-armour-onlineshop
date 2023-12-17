import axios from "axios";
import React, { useEffect, useState } from "react";

import SingleProductCard from "../SingleProductCard/SingleProductCard";
import { useNavigate } from "react-router-dom";

function ProductsCardCategory({ category, pCount = -1 }) {
  const [data, setData] = useState([]);

  const navigate = useNavigate();
  // console.log(category);

  useEffect(() => {
    axios(`http://localhost:8000/api/products/`)
      .then((res) => setData(res.data.data.products.slice(0, pCount)))
      .then((err) => console.log(err));
  }, []);

  console.log(data.slice(0, 6));
  return (
    <div className="min-h-[90vh] max-w-[90rem] mx-auto flex flex-col justify-start items-center gap-2 mt-10 border-b-[1px] border-t-[1px] border-gray-400 py-5">
      <span className="text-gray-500 self-start pl-8 ">{category}</span>
      <div
        className="self-start text-[1.3rem] font-bold pl-8 md:text-[1.4rem] lg:text-[1.6rem] cursor-pointer"
        onClick={() => navigate(`${category}`)}
      >
        {category} products
      </div>

      <div className="max-w-[90rem]  flex items-center justify-center flex-wrap gap-5 lg:gap-x-14 gap-y-12 mt-3 sm:mt-6 ">
        {data.map((product) => (
          <SingleProductCard {...product} />
        ))}
      </div>
    </div>
  );
}

export default ProductsCardCategory;
