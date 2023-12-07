import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import getUseName from "./getUserName";
function Orders() {
  const [serverData, setServerData] = useState(null);
  const [pageCount, setPageCount] = useState(null);

  useEffect(() => {
    //GET TABLE PRODUCT
    async function getData() {
      try {
        let response = await axios(`http://localhost:8000/api/orders`);

        setServerData(response.data.data.orders);
        console.log(serverData, response);
      } catch (err) {
        console.log(err.message);
      }
    }
    getData();

    //GET DATA FOR TABLE PAGINATING
    async function getPageCount() {
      let response = await axios(`http://localhost:8000/api/orders`);
      setPageCount(response.data.data.orders);
      console.log(pageCount);
    }
    getPageCount();
  }, []);

  if (!serverData || !pageCount) {
    return null;
  }

  return (
    <>
      <div className="overflow-x-scroll h-4/6 w-full md:w-11/12 lg:w-5/6 mt-10 md:mt-16">
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
                className="border-b dark:border-neutral-500"
                key={product._id}
              >
                <td className="whitespace-nowrap px-6 font-medium">
                  {console.log(getUseName(product.user))}
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
        {pageCount.map((page, index) => (
          <span
            className="py-2 px-4 rounded-md bg-primary text-secondary mx-1 md:mx-2"
            key={index}
          >
            {++index}
          </span>
        ))}
      </div>
    </>
  );
}

export default Orders;
