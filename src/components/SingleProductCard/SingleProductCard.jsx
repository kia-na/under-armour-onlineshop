import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import AppRoutes from "../../router/routes";

function SingleProductCard(props) {
  // console.log(`${AppRoutes.HOME}/${props._id}`);
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();
  // console.log(params, "SingleProductCard");

  return (
    <Link
      to={`${AppRoutes.HOME}/singleProduct${props._id}`}
      className="min-w-[14rem] w-2/5 max-w-[22rem] flex flex-col justify-center items-start gap-2 text-sm cursor-pointer"
    >
      <span className="mb-[5%]">
        <img
          src={`http://localhost:8000/images/products/images/${
            hover ? props.images[0] : props.images[1]
          }`}
          alt="shoe"
          className="w-full"
          onMouseOver={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        />
      </span>
      <span className="text-gray-500">Under Armour</span>
      <span className="font-bold">{props.name}</span>
      <span className="text-lg text-gray-600">${props.price}.00</span>
    </Link>
  );
}

export default SingleProductCard;
