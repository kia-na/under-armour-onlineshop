import axios from "axios";
import React, { useEffect, useState } from "react";
import { Pagination } from "flowbite-react";
import SingleProductCard from "../SingleProductCard/SingleProductCard";
import { useNavigate } from "react-router-dom";
import { category_nameToNumber } from "../Product/dataConversion";

function ProductsCardCategory({ category, pCount }) {
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  // PAGINATING
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page) => setCurrentPage(page);
  const [showPagination, setShowPagination] = useState(true);
  const [pageCount, setPageCount] = useState(null);

  useEffect(() => {
    function getData() {
      axios(
        `http://localhost:8000/api/products?category=${category_nameToNumber[category]}&page=${currentPage}`
      )
        .then((res) => {
          // console.log(res.data);
          if (pCount) {
            setData(res.data.data.products.slice(0, pCount));

            setShowPagination(false);
          } else {
            setData(res.data.data.products);
          }

          setPageCount(Math.ceil(res.data.total / 10));
        })
        .catch((err) => console.log(err.message));
    }
    getData();
  }, [currentPage, category]);

  return (
    <div className="min-h-[90vh] max-w-[90rem] mx-auto flex flex-col justify-start items-center gap-2 mt-10 border-b-[1px] border-t-[1px] border-gray-400 py-5">
      <span className="text-gray-500 self-start pl-8 ">{category}</span>
      <div
        className="self-start text-[1.3rem] font-bold pl-8 md:text-[1.4rem] lg:text-[1.6rem] cursor-pointer"
        onClick={() => navigate(`${category}`)}
      >
        {category} products
      </div>

      <div
        // onClickCapture={(e) => stopP}
        className="max-w-[90rem]  flex items-center justify-center flex-wrap gap-5 lg:gap-x-14 gap-y-12 mt-3 sm:mt-6 "
      >
        {data.map((product, index) => (
          <SingleProductCard key={index} {...product} />
        ))}
      </div>
      {showPagination && pageCount !== 1 && (
        <div className="flex overflow-x-auto sm:justify-center mt-10 ">
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

export default ProductsCardCategory;
