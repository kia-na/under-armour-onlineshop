import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductsCardCategory from "./ProductsCardCategory";

function ProductsCard() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    function getCategories() {
      axios("http://localhost:8000/api/categories")
        .then((res) => setCategories(res.data.data.categories))
        .catch((err) => console.log(err));
    }
    getCategories();
  }, []);
  return (
    <div className={`w-full flex flex-col items-start justify-start`}>
      {categories.map((category, index) => (
        <ProductsCardCategory key={index} category={category.name} />
      ))}
    </div>
  );
}

export default ProductsCard;
