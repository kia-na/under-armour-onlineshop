import React, { useEffect } from "react";
import axios from "axios";
import { useState, useRef } from "react";
import { Pagination } from "flowbite-react";
// let data = [];
function Prices() {
  const [serverData, setServerData] = useState(null);
  const [pageCount, setPageCount] = useState(null);
  const [productData, setProductData] = useState([]);
  let data = useRef([]);

  console.log(productData, data);

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
  }, [currentPage, productData]);

  function handlePriceEdit(productId, priceEdit) {
    // console.log(productId, priceEdit, inventoryEdit);
    // productData[product._id]?.priceEdit
    data.current = productId;
    // data[productId].priceEdit = priceEdit;
    data[productId] = {
      ...data[productId],
      priceEdit,
    };
    setProductData({ ...data });
    // console.log(productData, data);
  }
  function handleInventoryEdit(productId, inventoryEdit) {
    data.current = productId;
    data[productId] = {
      ...data[productId],
      inventoryEdit,
    };
    // data[productId].inventoryEdit = inventoryEdit;

    setProductData({ ...data });
    // console.log(productData, data);
  }

  //HANDLE ESC KEY PRESS FOR CLOSING INPUT
  function priceEsc(id, key) {
    // console.log(key);
    if (key === "Escape") {
      delete data[id]?.priceEdit;
      delete data[id]?.newPrice;
    }
    if (Object.keys(data[id]).length === 0) {
      delete data[id];
    }
    setProductData({ ...data });
    // console.log(data, "priceEsc");
  }
  function inventoryEsc(id, key) {
    if (key === "Escape") {
      delete data[id]?.inventoryEdit;
      delete data[id]?.newInventory;
    }
    if (Object.keys(data[id]).length === 0) {
      delete data[id];
    }
    setProductData({ ...data });
    // console.log(data, "inventoryEsc");
  }

  console.log();

  function updateData() {
    // console.log(productData, "UPDATE");
    const dataArr = [];
    for (const [id, value] of Object.entries(productData)) {
      // console.log(key, value);
      // dataArr[key] = value;
      dataArr.push({ id, ...value });
    }

    console.log(dataArr);
    dataArr.forEach((product, index) => {
      product.newPrice &&
        axios
          .patch(`http://localhost:8000/api/products/${product.id}`, {
            price: product.newPrice,
          })
          .then((res) => {
            console.log(res);
            delete data[product.id].newPrice;
            delete data[product.id].priceEdit;
            if (Object.keys(data[product.id]).length === 0) {
              delete data[product.id];
            }
            console.log("updated price", index);
            console.log(data, "dataaaaaaaa");
            setProductData({ ...data });
          })
          .catch((err) => console.log(err.message));

      product.newInventory &&
        axios
          .patch(`http://localhost:8000/api/products/${product.id}`, {
            quantity: product.newInventory,
          })
          .then((res) => {
            console.log(res);
            delete data[product.id].newInventory;
            delete data[product.id].inventoryEdit;
            if (Object.keys(data[product.id]).length === 0) {
              delete data[product.id];
            }
            console.log("updated inventory", index);
            setProductData({ ...data });
          })
          .catch((err) => console.log(err.message));
    });

    setProductData({ ...data });
  }

  if (!serverData || !pageCount) {
    return null;
  }
  console.log(Object.keys(productData), "obj key");

  return (
    <>
      <div className="text-sm text-left w-full  sm:w-11/12 lg:w-5/6 sm:text-lg font-bold cursor-pointer py-2 px-4 mt-4 sm:mb-4 sm:mt-8 md:mt-16 ">
        <button
          disabled={Object.keys(productData).length < 2 ? true : false}
          className="rounded-md bg-black text-white py-1 px-3 disabled:bg-[#cccccc] disabled:text-[#848484]"
          onClick={() => updateData()}
        >
          Save Changes
        </button>
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
                  {productData[product._id]?.priceEdit ? (
                    <input
                      autoFocus
                      onKeyDown={(e) => priceEsc(product._id, e.key)}
                      type="number"
                      defaultValue={product.price}
                      onChange={(e) =>
                        (data[product._id].newPrice = e.target.value)
                      }
                      className=" border-[2px] shadow-xl	text-black border-none outline-tertiary-text py-1 px-2 text-center rounded-lg"
                    />
                  ) : (
                    <span
                      className=" px-20 inline-block"
                      onClick={() => handlePriceEdit(product._id, true)}
                    >
                      {product.price}
                    </span>
                  )}

                  <span className="font-bold"> </span>
                </td>
                <td className="whitespace-nowrap px-6 py-5 text-center">
                  {productData[product._id]?.inventoryEdit ? (
                    <input
                      autoFocus
                      onKeyDown={(e) => inventoryEsc(product._id, e.key)}
                      type="number"
                      defaultValue={product.quantity}
                      onChange={(e) =>
                        (data[product._id].newInventory = e.target.value)
                      }
                      className=" border-[2px] shadow-xl	text-black border-none outline-tertiary-text py-1 px-2 text-center rounded-lg"
                    />
                  ) : (
                    <span
                      className=" px-20 inline-block"
                      onClick={() => handleInventoryEdit(product._id, true)}
                    >
                      {product.quantity}
                    </span>
                  )}
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
