import React from "react";
import { Modal, Button } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import axios from "axios";
function DeleteProductModal({
  openModal,
  setOpenModal,
  deleteItem,
  setCurrentPage,
}) {
  //HANDLE ESC KEY PRESS FOR CLOSING MODAl
  function handleKeyPress(e) {
    if (e.key === "Escape") {
      setOpenModal(false);
    }
  }

  //DELETE PRODUCT FROM SERVER
  function handleDelete() {
    console.log("deleted item?");
    axios
      .delete(`http://localhost:8000/api/products/${deleteItem}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    setOpenModal((openModal) => !openModal);
    setCurrentPage(1);
  }

  return (
    <>
      =
      <Modal
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        onKeyDown={handleKeyPress}
      >
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this product?
            </h3>
            <div className="flex justify-center gap-4">
              <Button className="bg-black" onClick={handleDelete}>
                Yes, I'm sure
              </Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                No, Cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default DeleteProductModal;
