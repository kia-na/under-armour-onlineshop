import React, { useState } from "react";

function Cart() {
  const [cartData, setCartData] = useState([]);

  function handleDelete(id) {
    console.log(id, "p_id");
  }
  return (
    <div className="overflow-x-scroll h-3/6 w-full md:w-11/12 lg:w-5/6 ">
      <table className="min-w-full text-left text-sm font-light lg:text-lg">
        <thead className="border-b font-medium dark:border-neutral-500 text-black">
          <tr>
            <th scope="col" className="px-6 py-5 w-2/12">
              Picture
            </th>
            <th scope="col" className="px-6 py-5 w-2/12">
              Name
            </th>
            <th scope="col" className="px-6 py-5 w-4/12">
              Price
            </th>
            <th scope="col" className="px-6 py-5 w-18 text-center w-2/12">
              Quantity
            </th>
            <th scope="col" className="px-6 py-5 text-center w-2/12">
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {cartData.map((product) => (
            <tr className="border-b dark:border-neutral-500" key={product._id}>
              <td className="whitespace-nowrap px-6 font-medium">
                <img
                  src={`http://localhost:8000/images/products/thumbnails/${product.thumbnail}`}
                  alt="product-pic"
                  className="w-20"
                />
              </td>
              <td className="whitespace-nowrap px-6 py-5 text-black">
                {product.name}
              </td>
              <td className="whitespace-nowrap px-6 py-5"></td>
              <td className="whitespace-nowrap px-6 py-5 text-center"></td>
              <td className="whitespace-nowrap px-6 py-5 text-center">
                <svg
                  onClick={() => handleDelete(product._id)}
                  className="inline lg:w-8 lg:h-8 cursor-pointer text-black"
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
  );
}

export default Cart;
