import React from "react";
import { Modal, Button } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import axios from "axios";

function EditProductModal({ openModal, setOpenModal, editItem }) {
  //IF EDIT_ITEM = NULL IN -ADD MODE-
  console.log(editItem);
  //HANDLE ESC KEY PRESS FOR CLOSING MODAl
  function handleKeyPress(e) {
    if (e.key === "Escape") {
      setOpenModal(false);
    }
  }

  //ADD PRODUCT TO SERVER
  function addProduct() {}

  //DELETE PRODUCT FROM SERVER
  function handleEdit() {
    console.log("deleted item?");
    axios(`http://localhost:8000/api/products/${editItem}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    // setOpenModal(false);
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
            Add/Edit Product
          </span>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center">
            {/* <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this product?
            </h3> */}
            <form
              action="#"
              className="flex flex-col items-center justify-center gap-4 px-8 mb-6"
            >
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
                    className="w-full bg-gray-100 border-[1px] border-gray-300 rounded-md text-gray-500 px-4 py-2"
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
              {editItem === null ? (
                <Button className="bg-black" onClick={addProduct}>
                  Add Product
                </Button>
              ) : (
                <Button className="bg-black" onClick={handleEdit}>
                  Save
                </Button>
              )}
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default EditProductModal;
