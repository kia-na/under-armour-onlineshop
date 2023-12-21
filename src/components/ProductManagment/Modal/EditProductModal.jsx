import React, { useEffect, useState } from "react";
import { Modal, Button } from "flowbite-react";
import axios from "axios";

function EditProductModal({ openModal, setOpenModal, editItem }) {
  //HANDLE ESC KEY PRESS FOR CLOSING MODAl
  function handleKeyPress(e) {
    if (e.key === "Escape") {
      setOpenModal(false);
    }
  }

  function handleEdit() {
    console.log("deleted item?");
    axios(`http://localhost:8000/api/products/${editItem}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    // setOpenModal(false);
  }

  useEffect(() => {
    //EDIT PRODUCT FROM SERVER
    function getData() {
      console.log("deleted item?");
      axios(`http://localhost:8000/api/products/${editItem}`)
        .then((res) => console.log(res.data.data.product))
        .catch((err) => console.log(err));
      // setOpenModal(false);
    }
    getData();
  }, [editItem]);

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
            <form className="flex flex-col items-center justify-center gap-4 sm:px-8 mb-6">
              <div className="w-full">
                <label className="flex flex-col items-start justify-center gap-1">
                  <span className="font-bold text-sm">Name:*</span>
                  <input
                    type="text"
                    name="Name"
                    className="w-full outline-none bg-inherit border-[1px] border-gray-300 rounded-md text-gray-500 px-4 py-2"
                  />
                </label>
              </div>
              <div className="w-full flex items-center justify-between gap-2">
                <label className="w-1/2 flex flex-col items-start justify-center gap-1">
                  <span className="font-bold text-sm">Category:*</span>
                  <select
                    name="category"
                    className="w-full bg-inherit border-[1px] border-gray-300 rounded-md text-gray-500 px-4 py-2"
                  >
                    <option value="men">Men</option>
                    <option value="women">Women</option>
                    <option value="boys">Boys</option>
                    <option value="girls">Girls</option>
                    <option value="unisex">Unisex</option>
                  </select>
                </label>
                <label className="w-1/2 flex flex-col items-start justify-center gap-1">
                  <span className="font-bold text-sm">Sub Category:*</span>
                  <select
                    name="category"
                    className="w-full bg-inherit border-[1px] border-gray-300 rounded-md text-gray-500 px-4 py-2"
                  >
                    <option value="running">Running</option>
                    <option value="training">Training</option>
                    <option value="basketball">Basketball</option>
                  </select>
                </label>
              </div>
              <div className="w-full">
                <label className="flex flex-col items-start justify-center gap-1">
                  <span className="font-bold text-sm">Price:*</span>
                  <input
                    type="number"
                    name="Price"
                    className="w-full bg-inherit border-[1px] border-gray-300 rounded-md text-gray-500 px-4 py-2"
                  />
                </label>
              </div>
              <div className="w-full">
                <label className="flex flex-col items-start justify-center gap-1">
                  <span className="font-bold text-sm">Quantity:*</span>
                  <input
                    type="number"
                    name="Quantity"
                    className="w-full bg-inherit border-[1px] border-gray-300 rounded-md text-gray-500 px-4 py-2"
                  />
                </label>
              </div>
              <div className="w-full">
                <label className="flex flex-col items-start justify-center gap-1">
                  <span className="font-bold text-sm">Images:*</span>
                  <input
                    type="file"
                    name="Name"
                    multiple
                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  />
                </label>
              </div>
              <div className="w-full">
                <label className="flex flex-col items-start justify-center gap-1">
                  <span className="font-bold text-sm">Description:*</span>

                  <textarea
                    name="description"
                    className="w-full h-[8rem] bg-inherit border-[1px] border-gray-300 rounded-md text-gray-500 px-4 py-2"
                  ></textarea>
                </label>
              </div>
            </form>
            <div className="flex justify-center gap-4">
              <Button className="bg-black">Save</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default EditProductModal;
