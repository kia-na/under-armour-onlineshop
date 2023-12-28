import React from "react";
import { useParams } from "react-router-dom";
function PaymentResult() {
  const params = useParams();
  console.log(params);
  // {params.pay === 'fail'? }
  return <></>;
}

export default PaymentResult;
