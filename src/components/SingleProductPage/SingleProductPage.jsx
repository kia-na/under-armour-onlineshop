import React from "react";

function SingleProductPage() {
  return (
    <>
      <div className="flex flex-col justify-between items-start w-[80%] md:flex-row md:w-[90%] md:gap-10 lg:w-[80%] lg:justify-center  gap-5 mx-auto mt-10">
        <div className=" w-full md:w-auto flex justify-center items-center">
          {/* <ImageCarousel /> */}
          <img
            src="/shoe.webp"
            alt=""
            className="w-[20rem] md:w-[30rem] lg:w-[40rem] xl:w-[38rem]"
          />
        </div>
        <div className="w-full flex flex-col gap-3 lg:max-w-[30rem]">
          <div className="border-b-[1px] border-gray-300 pb-5 flex flex-col items-start justify-center">
            <span className="font-bold text-lg w-[90%]">
              Grade School UA SlipSpeed™ Training Shoes
            </span>
            <span className="font-light">$130.00</span>
          </div>
          <span></span>
          <div className="w-full flex items-center justify-start gap-4 border-b-[1px] border-gray-300 pb-5">
            <div className="relative">
              <span className="absolute top-[-.5rem] left-[1.2rem] bg-gray-50 text-xs">
                Qty
              </span>
              <input
                type="number"
                defaultValue={1}
                min={1}
                max={5}
                className="border-[1px] border-gray-300 bg-transparent rounded-md w-[4rem] "
              />
            </div>
            <span className="bg-red-600 w-full py-[.8rem] rounded-md text-white text-center text-xs cursor-pointer">
              Add to Bag
            </span>
          </div>
          <div className="border-b-[1px] border-gray-300 pb-5 flex flex-col gap-3 mt-2">
            <span className="font-bold">What's it do?</span>
            <p className="text-xs text-gray-700 text-justify">
              These are the most versatile training shoes we've ever made. They
              feel great, feel cool, cushion better, fit perfectly, handle your
              toughest training, AND have a heel that converts easily from
              recover mode to train mode.
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
      <div className="w-full bg-[rgb(0,0,0)] fixed bottom-0 left-0 py-2 lg:py-4 text-center text-white font-extrabold text-lg">
        <hr />
        Sold Out
        <hr />
      </div>
    </>
  );
}

export default SingleProductPage;
