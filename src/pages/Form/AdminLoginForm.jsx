import React from "react";
import { Link, useNavigate } from "react-router-dom";
function AdminLoginForm() {
  const Navigate = useNavigate();
  // console.log(Navigate());

  // async function checkAuth() {
  //   const data = await fetch("http://localhost:8000/api/auth/login");
  //   const dataA = (await data).json();
  //   console.log(dataA);
  // }
  return (
    <div className=" h-screen flex items-start pt-32 justify-center ">
      <div className="relative w-5/6 h-2/5 sm:h-3/5 lg:w-3/5 bg-primary flex flex-col md:flex-row shadow-form ">
        <Link
          to="/"
          className="absolute z-10 text-primary -top-8 flex  cursor-pointer gap-1  left-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m4 10l-.707.707L2.586 10l.707-.707L4 10Zm17 8a1 1 0 1 1-2 0h2ZM8.293 15.707l-5-5l1.414-1.414l5 5l-1.414 1.414Zm-5-6.414l5-5l1.414 1.414l-5 5l-1.414-1.414ZM4 9h10v2H4V9Zm17 7v2h-2v-2h2Zm-7-7a7 7 0 0 1 7 7h-2a5 5 0 0 0-5-5V9Z"
            />
          </svg>
          Back To Home
        </Link>
        <div className="md:w-2/5 h-2/5 flex flex-col items-center justify-center p-2 md:h-full">
          <svg
            className="text-secondary w-16 h-16 md:w-32 md:h-32"
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
          <span className="text-secondary text-[8px] sm:text-lg tracking-[1rem] md:tracking-[.5rem] ">
            ....LOGIN....
          </span>
        </div>
        <div className="md:w-3/5 h-3/5 bg-tertiary flex flex-col gap-3 items-center justify-center md:gap-8 md:h-full">
          <label
            htmlFor="userName"
            className="w-3/6 text-tertiary-text text-left flex flex-col items-start md:w-4/6 "
          >
            <span className="text-[8px] sm:text-lg tracking-[.4rem] md:tracking-[.6rem]">
              USERNAME
            </span>
            <input
              id="userName"
              type="text"
              className="w-full bg-inherit border-b-2 border-b-gray-800 text-tertiary-text outline-none py-1"
            />
          </label>
          <label
            htmlFor="password"
            className="w-3/6 text-gray-700 text-left flex flex-col items-start md:w-4/6"
          >
            <span className="text-[8px] text-tertiary-text sm:text-lg tracking-[.4rem] md:tracking-[.6rem]">
              PASSWORD
            </span>
            <input
              id="password"
              type="password"
              className=" w-full  bg-inherit border-b-2 border-b-gray-800 text-gray-400 outline-none py-1"
            />
          </label>
          <button className="text-[8px] mt-2 py-1 px-2 sm:text-lg sm:mt-5 sm:px-4 sm:py-3 tracking-[.2rem] cursor-pointer bg-tertiary-text md:py-3 md:px-6  md:mt-10">
            <Link to="/underarmour/admin-panel"> - LOGIN -</Link>
          </button>
        </div>
      </div>
      <span className="absolute text-[8px] sm:text-sm bottom-5 tracking-[.5rem] border-primary border-b-2 px-2">
        <span className="text-[15px] sm:text-[1.4rem]">ADMIN</span>
        &#160;LOGIN &#160;FORM
      </span>
      {/* <button>
        <Link to="/underarmour/admin-panel" className="text-red-500 underline">
          Login
        </Link>
      </button> */}
    </div>
  );
}

export default AdminLoginForm;
