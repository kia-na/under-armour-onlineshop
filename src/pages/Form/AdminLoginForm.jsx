import React from "react";
import { Link } from "react-router-dom";

import { FloatingLabel } from "flowbite-react";

function AdminLoginForm() {
  function handleSubmit(e) {
    console.log(e.target);
  }

  return (
    <div className="h-screen bg-gray-600 w-full flex justify-center items-center relative">
      <form className="bg-white w-11/12 h-3/8 lg:w-2/6 lg:h-2/5 sm:h-3/6 flex flex-col gap-3 justify-between rounded-lg px-3 py-5 text-center sm:w-4/6 md:w-3/6 lg:px-[5%]">
        <span className="font-bold text-xl sm:text-3xl sm:mt-2 lg:mt-5">
          LOGIN
        </span>
        <div className="flex flex-col gap-2 sm:gap-4">
          <FloatingLabel
            variant="outlined"
            label="User name"
            onBlur={handleSubmit}
          />
          <FloatingLabel
            variant="outlined"
            label="Password"
            onBlur={handleSubmit}
          />
        </div>

        <button className="py-1 border-2 rounded-md text-white bg-gray-800 cursor-pointer sm:py-3 sm:text-lg">
          <Link to="/underarmour/admin-panel">SIGN IN</Link>
        </button>
        <Link
          to="/"
          className="text-sm sm:text-lg flex items-center justify-center gap-2"
        >
          <svg
            className=""
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M15.954 12a17.23 17.23 0 0 1-.324.233c-.826.585-2.023.985-3.58.985h-.104c-1.556 0-2.755-.4-3.58-.985A36.43 36.43 0 0 1 8.042 12c.09-.067.196-.143.324-.234c.825-.584 2.024-.985 3.58-.985h.104c1.557 0 2.756.401 3.58.985c.129.09.235.167.325.234M24 7.181s-.709-.541-2.95-1.365c-1.968-.721-3.452-.883-3.452-.883l.006 4.243c0 .598-.162 1.143-.618 1.765c-1.672-.61-3.254-.985-4.981-.985c-1.728 0-3.308.375-4.98.985c-.457-.619-.62-1.168-.62-1.765l.007-4.243s-1.494.16-3.463.883C.709 6.642 0 7.181 0 7.181c.093 1.926 1.78 3.638 4.435 4.82C1.777 13.18.09 14.887 0 16.818c0 0 .709.54 2.949 1.365c1.968.721 3.453.883 3.453.883l-.007-4.244c0-.597.164-1.143.619-1.764c1.672.61 3.252.983 4.98.983c1.727 0 3.309-.374 4.98-.983c.457.62.62 1.167.62 1.764l-.006 4.244s1.484-.16 3.452-.883c2.241-.826 2.95-1.365 2.95-1.365c-.093-1.927-1.78-3.64-4.435-4.819c2.657-1.182 4.343-2.888 4.435-4.82"
            />
          </svg>{" "}
          Back to Home
        </Link>
      </form>
    </div>
  );
}

export default AdminLoginForm;
