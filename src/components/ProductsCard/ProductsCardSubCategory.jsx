import axios from "axios";
import React, { useEffect, useState, useParams } from "react";
import {
  category_nameToNumber,
  subCategory_nameToNumber,
} from "../Product/dataConversion";
import SingleProductCard from "../SingleProductCard/SingleProductCard";
import { Pagination } from "flowbite-react";

function ProductsCardSubCategory({ category, subcategory }) {
  const [data, setData] = useState([]);
  console.log("CardSubCategory");

  // PAGINATING
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page) => setCurrentPage(page);
  // const [showPagination, setShowPagination] = useState(true);
  const [pageCount, setPageCount] = useState(null);

  useEffect(() => {
    function getData() {
      let subCategoryId =
        subCategory_nameToNumber[category][
          subcategory[0].toUpperCase() + subcategory.slice(1)
        ];

      axios(
        `http://localhost:8000/api/products?category=${category_nameToNumber[category]}&subcategory=${subCategoryId}&page=${currentPage}`
      )
        .then((res) => {
          console.log(res.data);
          setData(res.data.data.products);
          setPageCount(Math.ceil(res.data.total / 10));
        })
        .catch((err) => console.log(err.message));
    }
    getData();
  }, [currentPage, subcategory]);

  return (
    <div className="min-h-[100vh] max-w-[100rem] mx-auto flex flex-col justify-start items-center gap-2 mt-8">
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
      {pageCount !== 1 && (
        <div className="flex overflow-x-auto sm:justify-center ">
          <Pagination
            layout="pagination"
            currentPage={currentPage}
            totalPages={pageCount}
            onPageChange={onPageChange}
            previousLabel="Back"
            nextLabel="Next"
            showIcons
          />
        </div>
      )}
    </div>
  );
}

export default ProductsCardSubCategory;
