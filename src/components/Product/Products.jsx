import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { category, subCategory } from "./dataConversion";
import { Pagination } from "flowbite-react";
import DeleteProductModal from "../ProductManagment/Modal/DeleteProductModal";
import EditProductModal from "../ProductManagment/Modal/EditProductModal";

function Products() {
  const [serverData, setServerData] = useState(null);
  const [pageCount, setPageCount] = useState(null);
  //DELETE MODAL
  const [openModal, setOpenModal] = useState(false);
  const [deleteItem, setDeleteItem] = useState(null);

  //EDIT MODAL
  const [openEditModal, setOpenEditModal] = useState(false);
  const [editItem, setEditItem] = useState(null);

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
      // console.log(response);
    }
    getPageCount();
  }, [currentPage, openModal]);

  //OPEN DELETE MODAL
  function handleOpenModal(productId) {
    setDeleteItem(productId);
    setOpenModal(true);
  }

  //OPEN EDIT/ADD MODAL (IF ADD MODE productId = NULL)
  function handleEditModal(productId) {
    productId === "undefined" ? setEditItem(null) : setEditItem(productId);
    setOpenEditModal(true);
  }
  if (!serverData || !pageCount) {
    return null;
  }

  return (
    <>
      <div className="text-sm text-left w-full  sm:w-11/12 lg:w-5/6 sm:text-lg font-bold cursor-pointer py-2 px-4 mt-4 sm:mb-4 sm:mt-8 md:mt-16 ">
        <span
          className="rounded-md border-2 py-1 px-3 hover:text-secondary hover:bg-primary hover:py-2"
          onClick={() => handleEditModal(null)}
        >
          Add product
        </span>
      </div>
      <div className="overflow-x-scroll h-3/6 w-full md:w-11/12 lg:w-5/6 ">
        <table className="min-w-full text-left text-sm font-light lg:text-lg">
          <thead className="border-b font-medium dark:border-neutral-500">
            <tr>
              <th scope="col" className="px-6 py-5">
                Picture
              </th>
              <th scope="col" className="px-6 py-5">
                Name
              </th>
              <th scope="col" className="px-6 py-5">
                Category
              </th>
              <th scope="col" className="px-6 py-5 w-18 text-center">
                Edit
              </th>
              <th scope="col" className="px-6 py-5 w-10 text-center">
                Delete
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
                  <img
                    src={`http://localhost:8000/images/products/images/${product.images[2]}`}
                    alt="product-pic"
                    className="w-20"
                  />
                </td>
                <td className="whitespace-nowrap px-6 py-5">{product.name}</td>
                <td className="whitespace-nowrap px-6 py-5">
                  {category[product.category] +
                    " / " +
                    subCategory[product.subcategory]}
                </td>
                <td className="whitespace-nowrap px-6 py-5 text-center">
                  <svg
                    onClick={() => handleEditModal(product._id)}
                    className="inline lg:w-8 lg:h-8 cursor-pointer "
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M21.455 5.416a.75.75 0 0 1-.096.943l-9.193 9.192a.75.75 0 0 1-.34.195l-3.829 1a.75.75 0 0 1-.915-.915l1-3.828a.778.778 0 0 1 .161-.312L17.47 2.47a.75.75 0 0 1 1.06 0l2.829 2.828a.756.756 0 0 1 .096.118Zm-1.687.412L18 4.061l-8.518 8.518l-.625 2.393l2.393-.625l8.518-8.519Z"
                      clipRule="evenodd"
                    />
                    <path
                      fill="currentColor"
                      d="M19.641 17.16a44.4 44.4 0 0 0 .261-7.04a.403.403 0 0 1 .117-.3l.984-.984a.198.198 0 0 1 .338.127a45.91 45.91 0 0 1-.21 8.372c-.236 2.022-1.86 3.607-3.873 3.832a47.77 47.77 0 0 1-10.516 0c-2.012-.225-3.637-1.81-3.873-3.832a45.922 45.922 0 0 1 0-10.67c.236-2.022 1.86-3.607 3.873-3.832a47.75 47.75 0 0 1 7.989-.213a.2.2 0 0 1 .128.34l-.993.992a.402.402 0 0 1-.297.117a46.164 46.164 0 0 0-6.66.255a2.89 2.89 0 0 0-2.55 2.516a44.421 44.421 0 0 0 0 10.32a2.89 2.89 0 0 0 2.55 2.516c3.355.375 6.827.375 10.183 0a2.89 2.89 0 0 0 2.55-2.516Z"
                    />
                  </svg>
                </td>
                <td className="whitespace-nowrap px-6 py-5 text-center">
                  <svg
                    onClick={() => handleOpenModal(product._id)}
                    className="inline lg:w-8 lg:h-8 cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g fill="none">
                      <path
                        fill="currentColor"
                        d="M9 7h9v11a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V7h3z"
                      />
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M20 7h-2M4 7h2m0 0h12M6 7v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7m-9-.5v0A2.5 2.5 0 0 1 11.5 4h1A2.5 2.5 0 0 1 15 6.5v0"
                      />
                    </g>
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
      {openModal && (
        <DeleteProductModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          deleteItem={deleteItem}
        />
      )}
      {openEditModal && (
        <EditProductModal
          openModal={setOpenEditModal}
          setOpenModal={setOpenEditModal}
          editItem={editItem}
        />
      )}
    </>
  );
}

export default Products;
