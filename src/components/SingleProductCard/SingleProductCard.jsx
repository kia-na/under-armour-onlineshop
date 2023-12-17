import React from "react";

function SingleProductCard(props) {
  return (
    <div className="min-w-[14rem] w-2/5 max-w-[22rem] flex flex-col justify-center items-start gap-2 text-sm cursor-pointer">
      <span className="mb-[5%]">
        <img
          src={`http://localhost:8000/images/products/images/${props.images[1]}`}
          alt="shoe"
          className="w-full"
        />
      </span>
      <span className="text-gray-500">Under Armour</span>
      <span className="font-bold">{props.name}</span>
      <span className="text-lg text-gray-600">${props.price}.00</span>
    </div>
  );
}

export default SingleProductCard;
