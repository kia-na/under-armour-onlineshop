import React from "react";
import { Modal, Button } from "flowbite-react";
import axios from "axios";

function AddProductModal({ openModal, setOpenModal }) {
  //HANDLE ESC KEY PRESS FOR CLOSING MODAl
  function handleKeyPress(e) {
    if (e.key === "Escape") {
      setOpenModal(false);
    }
  }

  //ADD PRODUCT TO SERVER
  function handleSubmit(e) {
    e.preventDefault();
    // console.log(e.target);
    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      category: formData.get("category"),
      subcategory: formData.get("subcategory"),
      price: formData.get("price"),
      quantity: formData.get("quantity"),
      images: formData.get("images"),
      description: formData.get("description"),
    };
    console.log(data);
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
              onSubmit={handleSubmit}
            >
              <div className="w-full">
                <label className="flex flex-col items-start justify-center gap-1">
                  <span className="font-bold text-sm">Name:*</span>
                  <input
                    type="text"
                    name="name"
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
                    name="subcategory"
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
                    name="price"
                    className="w-full bg-inherit border-[1px] border-gray-300 rounded-md text-gray-500 px-4 py-2"
                  />
                </label>
              </div>
              <div className="w-full">
                <label className="flex flex-col items-start justify-center gap-1">
                  <span className="font-bold text-sm">Quantity:*</span>
                  <input
                    type="number"
                    name="quantity"
                    className="w-full bg-inherit border-[1px] border-gray-300 rounded-md text-gray-500 px-4 py-2"
                  />
                </label>
              </div>
              <div className="w-full">
                <label className="flex flex-col items-start justify-center gap-1">
                  <span className="font-bold text-sm">Images:*</span>
                  <input
                    type="file"
                    name="images"
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
