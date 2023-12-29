import React from "react";
import "./payment.css";

function Payment() {
  function handlePay(p) {
    p === "payed"
      ? window.location.assign(
          "http://localhost:3000/underarmour/payment/success"
        )
      : window.location.assign(
          "http://localhost:3000/underarmour/payment/fail"
        );
  }
  return (
    <div className="parent">
      <div className="container">
        <img src="/payment.png" alt="payment" className="w-5" />
        <div className="btns">
          <span className="pay" onClick={() => handlePay("payed")}>
            Pay
          </span>
          <span className="cancel" onClick={() => handlePay("Canceled")}>
            Cancel
          </span>
        </div>
      </div>
    </div>
  );
}

export default Payment;
