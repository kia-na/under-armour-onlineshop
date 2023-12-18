import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductsCardCategory from "./ProductsCardCategory";
import { Link } from "react-router-dom";

// ALL PRODUCTS COMPONENTS (MAIN PAGE)
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
    <div className={`w-full flex flex-col items-center justify-start`}>
      {categories.map((category, index) => (
        <Link key={index} to={`singleProduct/${category._id}`}>
          <ProductsCardCategory category={category.name} pCount={6} />
        </Link>
      ))}
    </div>
  );
}

export default ProductsCard;
