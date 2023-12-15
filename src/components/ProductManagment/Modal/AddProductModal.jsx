import React, { useState } from "react";
import { Modal, Button } from "flowbite-react";
import { useFormik } from "formik";
import {
  category_nameToNumber,
  subCategory_nameToNumber,
} from "../../Product/dataConversion";
import * as Yup from "yup";
import axios from "axios";

//FORMIK VALIDATION
const validationSchema = Yup.object({
  name: Yup.string().min(4, "Too short!").required("Name is required!"),
  category: Yup.string().required("Category is required!"),
  subcategory: Yup.string().required("Sub Category is required!"),
  price: Yup.number()
    .positive("Price must be positive")
    .required("price is required!"),
  quantity: Yup.number().positive().integer().required("Quantity is required!"),
  description: Yup.string().required("Description is required!"),
  images: Yup.string().required("Images is required!"),
});

function AddProductModal({ openModal, setOpenModal }) {
  const [category, setCategory] = useState("men");

  //FORMIK
  const formik = useFormik({
    initialValues: {
      name: "",
      category: "",
      subcategory: "",
      price: "",
      quantity: "",
      images: "",
      description: "",
    },
    onSubmit: addProductToServer,
    validationSchema,
  });

  //ON SUBMIT : SENDING NEW PRODUCT DATA TO SERVER
  function addProductToServer(values) {
    //CHANGE TO ID READABLE BY SERVER
    values.category = category_nameToNumber[category];
    values.subcategory = subCategory_nameToNumber[category][values.subcategory];
    values.brand = "under armour";

    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("category", values.category);
    formData.append("subcategory", values.subcategory);
    formData.append("price", values.price);
    formData.append("quantity", values.quantity);
    formData.append("description", values.description);
    formData.append("brand", values.brand);
    formData.append("thumbnail", values.images);

    // console.log(formData.get("thumbnail"));

    axios({
      url: "http://localhost:8000/api/products",
      method: "POST",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => console.log(res.message))
      .catch((err) => console.log(err.message))
      .finally(setOpenModal(false));
  }

  //HANDLE ESC KEY PRESS FOR CLOSING MODAl
  function handleKeyPress(e) {
    if (e.key === "Escape") {
      setOpenModal(false);
    }
  }

  return (
    <>
      <Modal
        show={openModal}
        size="lg"
        onClose={() => setOpenModal(false)}
        onKeyDown={handleKeyPress}
      >
        <Modal.Header>
          <span className="text-[1rem] text-gray-500 md:text-lg">
            Add Product
          </span>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <form
              className="flex flex-col items-center justify-center gap-4 sm:px-8"
              onSubmit={formik.handleSubmit}
            >
              <div className="w-full">
                <label className="flex flex-col items-start justify-center gap-1">
                  <span className="font-bold text-sm">Name:*</span>
                  <input
                    onBlur={formik.handleBlur}
                    type="text"
                    name="name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    className="w-full outline-none bg-inherit border-[1px] border-gray-300 rounded-md text-gray-500 px-4 py-2"
                  />
                  {formik.errors.name && formik.touched.name && (
                    <div className="text-red-600 text-sm">
                      {formik.errors.name}
                    </div>
                  )}
                </label>
              </div>
              <div className="w-full flex items-center justify-between gap-2">
                <label className="w-1/2 flex flex-col items-start justify-center gap-1">
                  <span className="font-bold text-sm">Category:*</span>
                  <select
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.category}
                    onChangeCapture={(e) => setCategory(e.target.value)}
                    name="category"
                    className="w-full bg-inherit border-[1px] border-gray-300 rounded-md text-gray-500 px-4 py-2"
                  >
                    <option value=""></option>
                    <option value="men">Men</option>
                    <option value="women">Women</option>
                    <option value="boys">Boys</option>
                    <option value="girls">Girls</option>
                    <option value="unisex">Unisex</option>
                  </select>
                  {formik.errors.category && formik.touched.category && (
                    <div className="text-red-600 text-sm">
                      {formik.errors.category}
                    </div>
                  )}
                  {formik.errors.subcategory && formik.touched.subcategory && (
                    <div className="text-red-600 text-sm h-5"></div>
                  )}
                </label>
                <label className="w-1/2 flex flex-col items-start justify-center gap-1">
                  <span className="font-bold text-sm">Sub Category:*</span>
                  <select
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.subcategory}
                    defaultValue=""
                    name="subcategory"
                    className="w-full bg-inherit border-[1px] border-gray-300 rounded-md text-gray-500 px-4 py-2"
                  >
                    <option></option>
                    {Object.keys(subCategory_nameToNumber[category]).map(
                      (SCategory) => (
                        <option value={SCategory}>{SCategory}</option>
                      )
                    )}
                  </select>
                  {formik.errors.subcategory && formik.touched.subcategory && (
                    <div className="text-red-600 text-sm">
                      {formik.errors.subcategory}
                    </div>
                  )}
                  {formik.errors.category && formik.touched.category && (
                    <div className="text-red-600 text-sm h-5"></div>
                  )}
                </label>
              </div>
              <div className="w-full">
                <label className="flex flex-col items-start justify-center gap-1">
                  <span className="font-bold text-sm">Price:*</span>
                  <input
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.price}
                    type="number"
                    name="price"
                    className="w-full bg-inherit border-[1px] border-gray-300 rounded-md text-gray-500 px-4 py-2"
                  />
                  {formik.errors.price && formik.touched.price && (
                    <div className="text-red-600 text-sm">
                      {formik.errors.price}
                    </div>
                  )}
                </label>
              </div>
              <div className="w-full">
                <label className="flex flex-col items-start justify-center gap-1">
                  <span className="font-bold text-sm">Quantity:*</span>
                  <input
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.quantity}
                    type="number"
                    name="quantity"
                    className="w-full bg-inherit border-[1px] border-gray-300 rounded-md text-gray-500 px-4 py-2"
                  />
                  {formik.errors.quantity && formik.touched.quantity && (
                    <div className="text-red-600 text-sm">
                      {formik.errors.quantity}
                    </div>
                  )}
                </label>
              </div>
              <div className="w-full">
                <label className="flex flex-col items-start justify-center gap-1">
                  <span className="font-bold text-sm">Images:*</span>
                  <input
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.images}
                    type="file"
                    name="images"
                    multiple
                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  />
                  {formik.errors.images && formik.touched.images && (
                    <div className="text-red-600 text-sm">
                      {formik.errors.images}
                    </div>
                  )}
                </label>
              </div>
              <div className="w-full">
                <label className="flex flex-col items-start justify-center gap-1">
                  <span className="font-bold text-sm">Description:*</span>

                  <textarea
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.description}
                    name="description"
                    className="w-full h-[8rem] bg-inherit border-[1px] border-gray-300 rounded-md text-gray-500 px-4 py-2"
                  ></textarea>
                  {formik.errors.description && formik.touched.description && (
                    <div className="text-red-600 text-sm">
                      {formik.errors.description}
                    </div>
                  )}
                </label>
              </div>
              <div className="flex justify-center">
                <Button className="w-[8rem] bg-black" type="submit">
                  Add Product
                </Button>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default AddProductModal;
