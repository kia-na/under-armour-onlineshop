import React, { useState, useEffect } from "react";
import { Modal, Button } from "flowbite-react";
import { useFormik } from "formik";
import {
  category_nameToNumber,
  subCategory_nameToNumber,
} from "../../Product/dataConversion";
import * as Yup from "yup";
import axios from "axios";
import Editor from "../../CKeditor/CKeditor";
import HTMLReactParser from "html-react-parser";
import { current } from "@reduxjs/toolkit";

//FORMIK VALIDATION
const validationSchema = Yup.object({
  name: Yup.string().min(4, "Too short!"),
  category: Yup.string(),
  subcategory: Yup.string(),
  price: Yup.number().positive("Price must be positive"),
  quantity: Yup.number().positive().integer(),
  description: Yup.string(),
  images: Yup.string(),
});

function EditProductModal({
  openModal,
  setOpenModal,
  editItemId,
  setCurrentPage,
}) {
  const [category, setCategory] = useState("men");
  const [defaultValue, setDefaultValue] = useState(null);

  const [editorLoaded, setEditorLoaded] = useState(false);
  const [data, setData] = useState("");

  useEffect(() => {
    // GET DATA FROM SERVER
    function getData() {
      axios(`http://localhost:8000/api/products/${editItemId}`)
        .then((res) => setDefaultValue(res.data.data.product))
        .catch((err) => console.log(err.message));
    }
    getData();
    // console.log(defaultValue);
  }, [editItemId]);

  useEffect(() => {
    setEditorLoaded(true);
    setData(defaultValue?.description);
  }, []);

  //FORMIK
  const formik = useFormik({
    initialValues: {
      name: "",
      category: "",
      subcategory: "",
      price: "",
      quantity: "",
      images: "",
    },
    onSubmit: updateServer,
    validationSchema,
  });

  //ON SUBMIT : SENDING NEW PRODUCT DATA TO SERVER
  function updateServer(values) {
    for (let [key, value] of Object.entries(values)) {
      if (!value) {
        delete values[key];
      }
      if (key === "category") values.category = category_nameToNumber[category];
      if (key === "subcategory")
        values.subcategory =
          subCategory_nameToNumber[category][values.subcategory];
    }
    if (data) values["description"] = JSON.stringify(data);
    console.log(values, "vvvvv");

    axios({
      url: `http://localhost:8000/api/products/${defaultValue._id}`,
      method: "PATCH",
      data: values,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => {
        console.log(res.message, "h");
      })
      .catch((err) => console.log(err.message));
    setOpenModal((openModal) => !openModal);
    setCurrentPage((prev) => prev);
  }

  let convertedDesc = defaultValue?.description.replace(/<[^>]+>/g, "");
  // console.log(defaultValue?.description);

  //HANDLE ESC KEY PRESS FOR CLOSING MODAl
  function handleKeyPress(e) {
    if (e.key === "Escape") {
      setOpenModal((openModal) => !openModal);
    }
  }
  console.log(defaultValue);

  if (!defaultValue) {
    return null;
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
            Edit Product
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
                    required
                    onBlur={formik.handleBlur}
                    type="text"
                    name="name"
                    onChange={formik.handleChange}
                    defaultValue={defaultValue.name}
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
                    // value={formik.values.category}
                    onChangeCapture={(e) => setCategory(e.target.value)}
                    name="category"
                    className="w-full bg-inherit border-[1px] border-gray-300 rounded-md text-gray-500 px-4 py-2"
                  >
                    <option value=""></option>
                    <option
                      selected={defaultValue.category.name === "men"}
                      value="men"
                    >
                      Men
                    </option>
                    <option
                      selected={defaultValue.category.name === "women"}
                      value="women"
                    >
                      Women
                    </option>
                    <option
                      selected={defaultValue.category.name === "boys"}
                      value="boys"
                    >
                      Boys
                    </option>
                    <option
                      selected={defaultValue.category.name === "girls"}
                      value="girls"
                    >
                      Girls
                    </option>
                    <option
                      selected={defaultValue.category.name === "unisex"}
                      value="unisex"
                    >
                      Unisex
                    </option>
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
                    // value={formik.values.subcategory}
                    name="subcategory"
                    className="w-full bg-inherit border-[1px] border-gray-300 rounded-md text-gray-500 px-4 py-2"
                  >
                    <option></option>
                    {Object.keys(subCategory_nameToNumber[category]).map(
                      (SCategory, index) => (
                        <option
                          key={index}
                          value={SCategory}
                          selected={
                            defaultValue.subcategory.name.split(" ")[0] ===
                            SCategory
                          }
                        >
                          {SCategory}
                        </option>
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
                    // value={formik.values.price}
                    defaultValue={defaultValue.price}
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
                    // value={formik.values.quantity}
                    defaultValue={defaultValue.quantity}
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
                  <span className="font-bold text-sm">Description:*</span>

                  <textarea
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    // value={formik.values.description}
                    defaultValue={convertedDesc}
                    name="description"
                    className="w-full h-[8rem] bg-inherit border-[1px] border-gray-300 rounded-md text-gray-500 px-4 py-2"
                  >
                    {/* {HTMLReactParser(defaultValue.description)} */}
                  </textarea>

                  {/* 
                  <Editor
                    name="description"
                    onChange={(data) => {
                      setData(data);
                    }}
                    editorLoaded={editorLoaded}
                    // defaultValue={defaultValue.description}
                    // onBlur={formik.handleBlur}
                  /> */}

                  {formik.errors.description && (
                    <div className="text-red-600 text-sm">
                      {formik.errors.description}
                    </div>
                  )}
                </label>
              </div>
              <div className="flex justify-center">
                <Button className="w-[8rem] bg-black" type="submit">
                  Edit Product
                </Button>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default EditProductModal;
