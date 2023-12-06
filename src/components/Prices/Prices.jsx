import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { category, subCategory } from "../Product/dataConversion";

function Prices() {
  const [serverData, setServerData] = useState(null);
  const [pageCount, setPageCount] = useState(null);

  useEffect(() => {
    //GET TABLE PRODUCT
    async function getData() {
      try {
        let response = await axios(
          `http://localhost:8000/api/products?page=1&limit=5`
        );

        setServerData(response.data.data.products);
        console.log(serverData);
      } catch (err) {
        console.log(err.message);
      }
    }
    getData();

    //GET DATA FOR TABLE PAGINATING
    async function getPageCount() {
      let response = await axios(`http://localhost:8000/api/products`);
      setPageCount(response.data.data.products);
      console.log(pageCount);
    }
    getPageCount();
  }, []);

  if (!serverData || !pageCount) {
    return null;
  }

  return (
    <>
      <div className="overflow-x-scroll  w-full md:w-11/12 lg:w-5/6 mt-2 md:mt-16">
        <table className="min-w-full text-left text-sm font-light lg:text-lg">
          <thead className="border-b font-medium dark:border-neutral-500">
            <tr>
              <th scope="col" className="px-6 py-5">
                Name
              </th>
              <th scope="col" className="px-6 py-5 w-18 text-center">
                Price ($)
              </th>
              <th scope="col" className="px-6 py-5 w-18 text-center">
                inventory
              </th>
            </tr>
          </thead>
          <tbody>
            {serverData.map((product) => (
              <tr
                className="border-b dark:border-neutral-500"
                key={product._id}
              >
                <td className="whitespace-nowrap px-6 py-5">{product.name}</td>

                <td className="whitespace-nowrap px-6 py-5 text-center">
                  <input
                    type="number"
                    placeholder={`${product.price}$`}
                    defaultValue={product.price}
                    className="bg-light-bg outline-tertiary-text py-1 px-2 text-center"
                  />

                  <span className="font-bold"> </span>
                </td>
                <td className="whitespace-nowrap px-6 py-5 text-center">
                  <input
                    type="number"
                    placeholder={`${product.quantity}`}
                    defaultValue={product.quantity}
                    className="bg-light-bg outline-tertiary-text py-1 px-2  text-center"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <span className="text-xs text-tertiary-text sm:text-md lg:text-lg font-bold  mt-5 cursor-pointer py-2 px-4 transition ease-in-out delay-150 hover:scale-110 ">
        Save Changes
      </span>
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

export default Prices;
