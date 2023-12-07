import React, { useState } from "react";
import { Link } from "react-router-dom";
function Header({ setOpenSideBar }) {
  //on dark mode
  return (
    <div className="flex items-center justify-between gap-1 h-20 px-2 bg-primary md:px-5 lg:px-8 xl:px-10">
      <div className="flex gap-6 items-center justify-between lg:gap-10">
        <span
          className="text-secondary cursor-pointer"
          onClick={() => setOpenSideBar((prev) => !prev)}
        >
          <svg
            className="w-5 h-5 inline lg:w-8 lg:h-8"
            xmlns="http://www.w3.org/2000/svg"
            width="512"
            height="512"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M80 96h352v32H80zm0 144h352v32H80zm0 144h352v32H80z"
            />
          </svg>
        </span>
        <span>
          <Link to="/underarmour">
            <svg
              className="text-secondary lg:w-8 lg:h-8"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M15.954 12a17.23 17.23 0 0 1-.324.233c-.826.585-2.023.985-3.58.985h-.104c-1.556 0-2.755-.4-3.58-.985A36.43 36.43 0 0 1 8.042 12c.09-.067.196-.143.324-.234c.825-.584 2.024-.985 3.58-.985h.104c1.557 0 2.756.401 3.58.985c.129.09.235.167.325.234M24 7.181s-.709-.541-2.95-1.365c-1.968-.721-3.452-.883-3.452-.883l.006 4.243c0 .598-.162 1.143-.618 1.765c-1.672-.61-3.254-.985-4.981-.985c-1.728 0-3.308.375-4.98.985c-.457-.619-.62-1.168-.62-1.765l.007-4.243s-1.494.16-3.463.883C.709 6.642 0 7.181 0 7.181c.093 1.926 1.78 3.638 4.435 4.82C1.777 13.18.09 14.887 0 16.818c0 0 .709.54 2.949 1.365c1.968.721 3.453.883 3.453.883l-.007-4.244c0-.597.164-1.143.619-1.764c1.672.61 3.252.983 4.98.983c1.727 0 3.309-.374 4.98-.983c.457.62.62 1.167.62 1.764l-.006 4.244s1.484-.16 3.452-.883c2.241-.826 2.95-1.365 2.95-1.365c-.093-1.927-1.78-3.64-4.435-4.819c2.657-1.182 4.343-2.888 4.435-4.82"
              />
            </svg>
          </Link>
        </span>
      </div>
      <div className="flex gap-5 items-center justify-between md:gap-8  lg:gap-10">
        <Link
          to="/underarmour/admin-login-form"
          className="underline cursor-pointer "
        >
          <svg
            className="w-7 h-7 text-secondary lg:w-8 lg:h-8"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 12q-1.65 0-2.825-1.175T8 8q0-1.65 1.175-2.825T12 4q1.65 0 2.825 1.175T16 8q0 1.65-1.175 2.825T12 12Zm-8 8v-2.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13q1.65 0 3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20H4Z"
            />
          </svg>
        </Link>
        <Link to="/underarmour/orders" className="underline cursor-pointer">
          <svg
            className="w-6 h-6 text-secondary lg:w-8 lg:h-8"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1Zm-9-1a2 2 0 0 1 4 0v1h-4Zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2Z"
            />
          </svg>
        </Link>
        <Link to="/underarmour/favorites" className="underline cursor-pointer">
          <svg
            className="w-6 h-6 lg:w-8 lg:h-8 text-red-700"
            xmlns="http://www.w3.org/2000/svg"
            width="256"
            height="256"
            viewBox="0 0 256 256"
          >
            <path
              fill="currentColor"
              d="M178 28c-20.09 0-37.92 7.93-50 21.56C115.92 35.93 98.09 28 78 28a66.08 66.08 0 0 0-66 66c0 72.34 105.81 130.14 110.31 132.57a12 12 0 0 0 11.38 0C138.19 224.14 244 166.34 244 94a66.08 66.08 0 0 0-66-66Zm-5.49 142.36a328.69 328.69 0 0 1-44.51 31.8a328.69 328.69 0 0 1-44.51-31.8C61.82 151.77 36 123.42 36 94a42 42 0 0 1 42-42c17.8 0 32.7 9.4 38.89 24.54a12 12 0 0 0 22.22 0C145.3 61.4 160.2 52 178 52a42 42 0 0 1 42 42c0 29.42-25.82 57.77-47.49 76.36Z"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default Header;
