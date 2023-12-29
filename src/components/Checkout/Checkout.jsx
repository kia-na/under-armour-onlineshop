import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function Checkout() {
  const today = new Date();
  const formik = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      address: "",
      phoneNumber: "",
      deliveryDate: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Minimum 2 characters")
        .max(15, "Maximum 15 characters")
        .required("Name is Required!"),
      lastName: Yup.string()
        .min(2, "Minimum 2 characters")
        .max(15, "Maximum 15 characters")
        .required("Last Name is Required!"),
      address: Yup.string()
        .min(5, "Minimum 5 characters")
        .required("Address is Required!"),
      phoneNumber: Yup.number("Must be Number")
        .min(11, "Invalid Number")
        .required("Phone Number Required!"),
      deliveryDate: Yup.date()
        .min(today, "Invalid Date (Past)")
        .required("Pick delivery Date"),
    }),
    onSubmit: handleSubmitForm,
  });

  function handleSubmitForm(values) {
    window.location.assign("http://localhost:3001/payment");
  }

  return (
    <div className="w-5/6 md:w-[55%] mx-auto mt-10">
      <div className="text-lg md:text-4xl text-black font-bold py-4">
        Register
      </div>
      <form
        onSubmit={formik.handleSubmit}
        className="flex-col flex border-[1px] shadow-md rounded-lg py-5 sm:px-2 md:px-5 gap-4 md:gap-7 lg:pt-10 bg-gray-100"
      >
        <div className="flex flex-col items-start md:flex-row gap-4 lg:w-5/6 lg:mx-auto">
          <span className="w-4/6">
            <input
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              placeholder="Name"
              className="border-none placeholder:text-gray-400 rounded-md shadow-lg w-full py-3 text-black"
            />
            <span className="text-red-500 text-xs md:text-sm inline-block mt-2">
              {formik.errors.name && formik.touched.name && (
                <p>{formik.errors.name}</p>
              )}
            </span>
          </span>
          <span className="w-4/6">
            <input
              type="text"
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              placeholder="Last Name"
              className="border-none placeholder:text-gray-400 rounded-md shadow-lg w-full py-3 text-black"
            />
            <span className="text-red-500 text-xs md:text-sm inline-block mt-2">
              {formik.errors.lastName && formik.touched.lastName && (
                <p>{formik.errors.lastName}</p>
              )}
            </span>
          </span>
        </div>
        <div className="flex flex-col items-start md:flex-row gap-4 lg:w-5/6 lg:mx-auto">
          <span className="w-4/6">
            <input
              type="text"
              name="address"
              value={formik.values.address}
              onChange={formik.handleChange}
              placeholder="Address"
              className="border-none placeholder:text-gray-400 rounded-md shadow-lg w-full py-3 text-black"
            />
            <span className="text-red-500 text-xs md:text-sm inline-block mt-2">
              {formik.errors.address && formik.touched.address && (
                <p>{formik.errors.address}</p>
              )}
            </span>
          </span>
          <span className="w-4/6">
            <input
              type="text"
              name="phoneNumber"
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              placeholder="Phone Number"
              className="border-none placeholder:text-gray-400 rounded-md shadow-lg w-full py-3 text-black"
            />
            <span className="text-red-500 text-xs md:text-sm inline-block mt-2">
              {formik.errors.phoneNumber && formik.touched.phoneNumber && (
                <p>{formik.errors.phoneNumber}</p>
              )}
            </span>
          </span>
        </div>
        <div className="flex flex-col items-center md:flex-row gap-4  lg:w-5/6 lg:mx-auto">
          <span className="w-4/6">
            <input
              type="date"
              name="deliveryDate"
              value={formik.values.deliveryDate}
              onChange={formik.handleChange}
              placeholder="Delivery Date"
              className="border-none rounded-md shadow-lg w-full py-3 text-gray-400"
            />
            <span className="text-red-500 text-xs md:text-sm inline-block mt-2">
              {formik.errors.deliveryDate && formik.touched.deliveryDate && (
                <p>{formik.errors.deliveryDate}</p>
              )}
            </span>
          </span>
          <span className="w-4/6"></span>
        </div>
        <div className="mx-auto font-bold flex items-center justify-center px-5 py-1 bg-black text-white rounded-md cursor-pointer md:w-1/5 md:py-2 md:text-lg">
          <button type="submit"> Payment</button>
        </div>
      </form>
    </div>
  );
}

export default Checkout;
