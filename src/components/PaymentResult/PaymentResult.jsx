import React from "react";
import { useParams } from "react-router-dom";
function PaymentResult() {
  const params = useParams();
  // console.log(params);
  return (
    <div className="w-full h-screen bg-white">
      <div className="text-black font-bold text-lg my-5 pl-5 sm:text-2xl  md:text-4xl lg:pl-36 md:pt-10 mx-auto">
        Payment Result :
      </div>
      {params.pay === "fail" ? (
        <div className="min-w-[10rem] text-center mx-auto">
          <div className="w-1/2 max-w-[25rem] mx-auto">
            <img src="/fail.png" alt="..." className="w-full" />
          </div>
          <span className="text-sm sm:text-lg md:text-xl inline-block md:mt-3">
            payment was FAILED.please try again!
          </span>
        </div>
      ) : (
        <div className="min-w-[10rem] text-center mx-auto">
          <div className="w-1/2 max-w-[25rem] mx-auto">
            <img src="/success.png" alt="..." className="w-full" />
          </div>
          <span className="text-sm sm:text-lg md:text-xl inline-block md:mt-3">
            payment was SUCCESSFUL.thank you for choosing us!
          </span>
        </div>
      )}
    </div>
  );
}

export default PaymentResult;
