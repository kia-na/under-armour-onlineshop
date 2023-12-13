import React, { useEffect } from "react";
import axios from "axios";
import { useState, useRef } from "react";
import { Pagination, Modal } from "flowbite-react";

function Prices() {
  const [serverData, setServerData] = useState(null);
  const [pageCount, setPageCount] = useState(null);
  const inputRef = useRef(null);

  // PAGINATING
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page) => setCurrentPage(page);

  useEffect(() => {
    //GET TABLE PRODUCT
    async function getData() {
      try {
        let response = await axios(
          `http://localhost:8000/api/products?page=${currentPage}&limit=5`
        );

        setServerData(response.data.data.products);
        // console.log(serverData);
      } catch (err) {
        console.log(err.message);
      }
    }
    getData();

    //GET DATA FOR TABLE PAGINATING
    async function getPageCount() {
      let response = await axios(`http://localhost:8000/api/products`);
      setPageCount(response.data.total_pages);
      // console.log(pageCount);
    }
    getPageCount();
  }, [currentPage]);

  if (!serverData || !pageCount) {
    return null;
  }

  return (
    <>
      <div className="text-sm text-left w-full  sm:w-11/12 lg:w-5/6 sm:text-lg font-bold cursor-pointer py-2 px-4 mt-4 sm:mb-4 sm:mt-8 md:mt-16 ">
        <span className="rounded-md border-2 py-1 px-3 hover:text-secondary hover:bg-primary hover:py-2">
          Save Changes
        </span>
      </div>
      <div className="overflow-x-scroll h-3/6 w-full md:w-11/12 lg:w-5/6 ">
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
                className="border-b dark:border-neutral-500 "
                key={product._id}
              >
                <td className="whitespace-nowrap px-6 py-5">{product.name}</td>

                <td className="whitespace-nowrap px-6 py-5 text-center">
                  <input
                    type="number"
                    placeholder={`${product.price}$`}
                    defaultValue={product.price}
                    ref={inputRef}
                    onBlur={() => {
                      console.log(inputRef.current.focus());
                    }}
                    className="bg-transparent	 border-none outline-tertiary-text py-1 px-2 text-center focus:bg-white rounded-lg"
                  />

                  <span className="font-bold"> </span>
                </td>
                <td className="whitespace-nowrap px-6 py-5 text-center">
                  <input
                    type="number"
                    placeholder={`${product.quantity}`}
                    defaultValue={product.quantity}
                    className="bg-transparent	outline-tertiary-text  border-none py-1 px-2 text-center focus:bg-white rounded-lg"
                  />
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

export default Prices;
