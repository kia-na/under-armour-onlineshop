import React from "react";
function Products() {
  return (
    <div className="h-20 pt-6 text-blue-500">
      <table>
        <thead>
          <tr>
            <td>Picture</td>
            <td>Name</td>
            <td>Category</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src="/shoe.webp" alt="" />
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Products;
