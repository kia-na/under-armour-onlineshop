import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart, editCart } from "../../redux/features/cart/cartSlice";
import { Link } from "react-router-dom";
import AppRoutes from "../../router/routes";
import { date } from "yup";

function Cart() {
  const [cartData, setCartData] = useState([]);
  const { carts, sumOfPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    setCartData(carts);
  }, [carts]);

  console.log(carts);
  function handleDelete(id) {
    // console.log(id, "p_id");
    dispatch(deleteFromCart({ productId: id }));
    setCartData([...carts]);
  }

  function handleProductCount(value, id, price) {
    console.log(value, id);
    dispatch(editCart({ productId: id, quantity: value, price }));
    // console.log(carts, "new cart");
    setCartData([...carts]);
  }
  console.log(cartData);
  // if () return null;

  return (
    <div className=" h-3/6 w-full md:w-11/12 lg:w-5/6 mx-auto mt-10 px-3 ">
      <div className=" py-5 text-2xl  md:text-5xl border-b-[1px] mb-5 border-gray-300 text-black font-bold flex items-end justify-start gap-2 md:gap-4">
        Your Bag
        <span className="font-light text-xs md:text-[1.3rem] mb-[.4rem] md:mb-3">
          ({cartData.length} item)
        </span>
      </div>
      <div className="overflow-x-scroll">
        {cartData.length !== 0 ? (
          <>
            <table className="min-w-full text-left text-sm font-light lg:text-lg bg-[#f0f0f0] rounded-md">
              <thead className=" font-medium dark:border-neutral-500 text-black">
                <tr>
                  <th scope="col" className="px-6 py-5 w-1/12">
                    Picture
                  </th>
                  <th scope="col" className="px-6 py-5 w-4/12">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-5 w-1/12">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-5 w-18 text-center w-1/12">
                    Quantity
                  </th>
                  <th scope="col" className="px-6 py-5 text-center w-1/12">
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody>
                {cartData?.map((product) => (
                  <tr className=" dark:border-neutral-500" key={product.id}>
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
                    <td className="whitespace-nowrap px-6 py-5 text-black">
                      {product.price}
                    </td>
                    <td className="whitespace-nowrap px-6 py-5 text-center text-black">
                      <input
                        type="number"
                        defaultValue={product.quantity}
                        className="bg-transparent w-16"
                        onChange={(e) =>
                          handleProductCount(
                            e.target.value,
                            product.productId,
                            product.price
                          )
                        }
                        min={1}
                        max={5}
                      />
                    </td>
                    <td className="whitespace-nowrap px-6 py-5 text-center text-black">
                      <svg
                        onClick={() => handleDelete(product.productId)}
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
            <div className="text-black flex items-center justify-between p-2 mt-8">
              <span className="font-bold text-3xl ">
                Total:
                <span className="font-normal text-[1.5rem]">
                  {" "}
                  {sumOfPrice}$
                </span>
              </span>
              <Link
                to={`${AppRoutes.HOME}${AppRoutes.CHECKOUT}`}
                className="bg-black text-white rounded-lg py-2 px-4 font-bold cursor-pointer w-[10%] text-center text-lg"
              >
                Checkout
              </Link>
            </div>
          </>
        ) : (
          <div className="text-xl">Your Bag is Empty!</div>
        )}
      </div>
    </div>
  );
}

export default Cart;
