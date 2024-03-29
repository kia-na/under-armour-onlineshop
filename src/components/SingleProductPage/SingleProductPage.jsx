import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
// import { Carousel } from "flowbite-react";
import HTMLReactParser from "html-react-parser";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";
import Carousel from "../Carousel/Carousel";
import Toastify from "../Toast/Toast";
function SingleProductPage() {
  const [productData, setProductData] = useState(null);
  const [count, setCount] = useState(1);
  const [isShow, setIsShow] = useState(false);

  const params = useParams();
  // console.log();

  useEffect(() => {
    axios(`http://localhost:8000/api/products/${params.id}`)
      .then((res) => setProductData(res.data.data.product))
      .catch((err) => console.log(err.message));
  }, [params.id]);

  const dispatch = useDispatch();

  function addToBag() {
    dispatch(
      addToCart({
        name: productData.name,
        price: productData.price,
        productId: params.id,
        quantity: +count,
        thumbnail: productData.thumbnail,
        maxQuantity: productData.quantity,
      })
    );
    setIsShow(true);
    setTimeout(() => setIsShow((isShow) => !isShow), 1200);
  }

  // console.log();
  if (!productData || !productData.images[0]) return null;

  console.log(productData, "page");
  return (
    <>
      <Toastify isShow={isShow} />
      <div className="flex flex-col justify-between items-start w-[80%] md:flex-row md:w-[90%] md:gap-10 lg:w-[80%] lg:justify-center  gap-5 mx-auto mt-10 md:mt-16 xl:mt-28">
        <div className=" w-full md:w-auto flex justify-center items-center">
          <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
            <img
              src={`http://localhost:8000/images/products/images/${
                productData.images[1]
                  ? productData.images[1]
                  : productData.images[0]
              }`}
              alt=""
              className="w-[20rem] md:w-[30rem] lg:w-[40rem] xl:w-[45rem]"
            />
            <Carousel images={productData.images} />
            {/* <Carousel>
              {productData.images.map((img) => (
                <img
                  src={`http://localhost:8000/images/products/images/${img}`}
                  alt="..."
                  className="w-[20rem] md:w-[30rem] lg:w-[40rem] xl:w-[45rem]"
                />
              ))}
            </Carousel> */}
          </div>
        </div>
        <div className="w-full flex flex-col gap-3 lg:max-w-[30rem]">
          <div className="border-b-[1px] border-gray-300 pb-5 flex flex-col items-start justify-center">
            <span className="font-bold text-lg w-[90%]">
              {productData.name}
            </span>
            <span className="font-light">${productData.price}.00</span>
          </div>
          {productData.quantity > 0 && (
            <div className="w-full flex items-center justify-start gap-4 border-b-[1px] border-gray-300 pb-5">
              <div className="relative">
                <span className="absolute top-[-.5rem] left-[1.2rem] bg-gray-50 text-xs">
                  Qty
                </span>
                <input
                  // onBlur={(e) => }
                  type="number"
                  defaultValue={1}
                  min={1}
                  onChange={(e) => setCount(e.target.value)}
                  max={productData.quantity}
                  onBlur={(e) =>
                    e.target.value > productData.quantity
                      ? (e.target.value = productData.quantity)
                      : null
                  }
                  className="border-[1px] border-gray-300 text-black bg-transparent rounded-md w-[4rem] "
                />
              </div>
              <span
                onClick={addToBag}
                className="bg-red-600 w-full py-[.8rem] rounded-md text-white text-center text-xs cursor-pointer"
              >
                Add to Bag
              </span>
            </div>
          )}

          <div className="border-b-[1px] border-gray-300 pb-5 flex flex-col gap-3 mt-2">
            <span className="font-bold">What's it do?</span>
            <p className="text-xs text-gray-700 text-justify">
              {HTMLReactParser(productData.description)}
            </p>
          </div>
          <div>
            <span></span>
            <span className="text-xs">
              Pick Up In Store:
              <span className="underline font-bold">Select A Store</span>
            </span>
          </div>
        </div>
      </div>
      {productData.quantity < 1 && (
        <div className="w-full bg-[rgb(0,0,0)] fixed bottom-0 left-0 py-2 lg:py-4 text-center text-white font-extrabold text-lg">
          <hr />
          Sold Out
          <hr />
        </div>
      )}
    </>
  );
}

export default SingleProductPage;
