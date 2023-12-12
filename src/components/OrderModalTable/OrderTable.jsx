import React from "react";

function OrderModalTable({ data }) {
  console.log(data);
  return (
    <>
      <div className="relative overflow-x-auto mt-4 md:mt-6 max-w-[30rem] mx-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="max-w-[5rem] px-6 py-3 rounded-s-lg">
                Product
              </th>
              <th scope="col" className="max-w-[.3rem] text-center py-3">
                Qty
              </th>
              <th scope="col" className="text-center py-3 rounded-e-lg">
                Price ($)
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((product, index) => (
              <tr key={index} className="bg-gray-50 dark:bg-gray-800">
                <th
                  scope="row"
                  className="max-w-[5rem] overflow-x-scroll  px-2 py-4 sm:px-4 md:px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {product.product.name}
                </th>
                <td className="max-w-[.3rem] text-center px-4 py-4">
                  {product.count}
                </td>
                <td className="text-center py-4">{product.product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default OrderModalTable;
