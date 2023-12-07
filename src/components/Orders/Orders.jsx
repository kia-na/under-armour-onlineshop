import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Pagination } from "flowbite-react";
import { userName } from "../Product/dataConversion";

function Orders() {
  const [serverData, setServerData] = useState(null);
  const [pageCount, setPageCount] = useState(null);
  const [delivered, setDelivered] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page) => setCurrentPage(page);

  useEffect(() => {
    //GET TABLE PRODUCT
    async function getData() {
      try {
        let response = await axios(
          `http://localhost:8000/api/orders?page=${currentPage}&limit=5`
        );

        setServerData(response.data.data.orders);
        // console.log(response);
      } catch (err) {
        console.log(err.message);
      }
    }
    delivered === null && getData();

    //GET DATA FOR TABLE PAGINATING
    async function getPageCount() {
      try {
        let response = await axios(`http://localhost:8000/api/orders`);
        setPageCount(response.data.total_pages);
        // console.log();
      } catch (err) {
        console.log(err.message);
      }
    }
    delivered === null && getPageCount();

    // GET DATA BY CLICK ON INPUTS
    async function getFilteredData() {
      const response = await axios(
        `http://localhost:8000/api/orders?deliveryStatus=${delivered}&page=${currentPage}&limit=5`
      );
      console.log(response.data.data.orders);
      setServerData(response.data.data.orders);
      setPageCount(response.data.total_pages);
      console.log("deleveere", delivered);
    }
    delivered !== null && getFilteredData();
  }, [currentPage, delivered]);

  if (!serverData || !pageCount) {
    return null;
  }

  console.log("data", serverData);
  return (
    <>
      <div className="text-xs sm:text-md md:text-lg mt-5 md:mt-16 p-3 flex flex-col items-start sm:flex-row sm:gap-10 lg:w-5/6 w-11/12 gap-2">
        <label
          className="flex gap-2 items-center cursor-pointer"
          onClick={() => {
            setDelivered(true);
            setCurrentPage(1);
          }}
        >
          Delivered orders
          <input type="radio" name="orders" value="delivered" />
        </label>
        <label
          className="flex gap-2 items-center cursor-pointer"
          onClick={() => {
            setDelivered(false);
            setCurrentPage(1);
          }}
        >
          Pending orders
          <input type="radio" name="orders" value="pending" />
        </label>
      </div>
      <div className="overflow-x-scroll h-4/6 w-full md:w-11/12 lg:w-5/6">
        <table className="min-w-full text-left text-sm font-light lg:text-lg">
          <thead className="border-b font-medium dark:border-neutral-500">
            <tr>
              <th scope="col" className="px-6 py-5">
                Name
              </th>
              <th scope="col" className="px-6 py-5">
                Total price ($)
              </th>
              <th scope="col" className="px-6 py-5 w-18">
                Created date
              </th>
              <th scope="col" className="px-6 py-5 w-18 text-center">
                Check order
              </th>
            </tr>
          </thead>
          <tbody>
            {serverData.map((product) => (
              <tr
                className="border-b dark:border-neutral-500 "
                key={product._id}
              >
                <td className="whitespace-nowrap px-6 font-medium">
                  {userName[product.user]}
                </td>
                <td className="whitespace-nowrap px-6 py-5">
                  {product.totalPrice}
                </td>

                <td className="whitespace-nowrap px-6 py-5">
                  {new Date(product.createdAt).toLocaleDateString("en-us")}
                </td>
                <td className="whitespace-nowrap px-6 py-5 text-center">
                  <svg
                    className="inline lg:w-8 lg:h-8 cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M6 4v4h12V4h2.007c.548 0 .993.445.993.993v16.014a.994.994 0 0 1-.993.993H3.993A.993.993 0 0 1 3 21.007V4.993C3 4.445 3.445 4 3.993 4H6Zm3 13H7v2h2v-2Zm0-3H7v2h2v-2Zm0-3H7v2h2v-2Zm7-9v4H8V2h8Z"
                    />
                  </svg>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="w-full text-xs md:text-lg text-center mt-10">
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
      </div>
    </>
  );
}

export default Orders;
