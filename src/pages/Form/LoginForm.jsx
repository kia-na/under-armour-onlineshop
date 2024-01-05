import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AppRoutes from "../../router/routes";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function LoginForm() {
  const [formErr, setFormErr] = useState("");
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("refreshToken")) {
      navigate(`${AppRoutes.HOME}${AppRoutes.ADMINPANEL}`, {
        replace: true,
      });
    }
  }, []);

  // HANDLE SUBMIT FORM

  function handleSubmit(e) {
    e.preventDefault();
    console.log(userName, password);
    axios
      .post("http://localhost:8000/api/auth/login", {
        username: userName,
        password: password,
      })
      .then((res) => {
        if (res.status === 200) {
          // console.log(res.data.token.refreshToken);
          localStorage.setItem("refreshToken", res.data.token.refreshToken);
          navigate(`${AppRoutes.HOME}${AppRoutes.ADMINPANEL}`, {
            replace: true,
          });
        } else {
          setFormErr("Username or Password is WRONG!");
        }
      })
      .catch((err) => setFormErr("Username or Password is WRONG!"));
  }
  // HANDLE SUBMIT FORM

  console.log(formErr);
  return (
    <div className="h-screen bg-[rgba(0,0,0,.85)] w-full flex justify-center items-center relative">
      <div className="border-4 border-gary-600 p-4 rounded-lg">
        <form
          onSubmit={handleSubmit}
          className="bg-white w-[20rem] h-3/8 md:h-[26rem] border-white border-4 sm:h-3/6 flex flex-col  justify-between rounded-lg px-3 py-5 text-center sm:w-[28rem]"
        >
          <span className="font-bold text-xl sm:text-3xl sm:mt-1 lg:mt-1">
            LOGIN
          </span>
          <div className="flex flex-col gap-2 sm:gap-4">
            <div className="relative">
              <input
                type="text"
                id="userName"
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                required
                onInput={(e) => setUserName(e.target.value)}
              />
              <label
                htmlFor="userName"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                Username
              </label>
            </div>
            <div className="relative">
              <input
                type="text"
                id="Password"
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                required
                onInput={(e) => setPassword(e.target.value)}
              />
              <label
                htmlFor="Password"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                Password
              </label>
            </div>
          </div>
          <div>
            {formErr && <div className="text-red-600 mb-3">{formErr}</div>}
            <button
              type="submit"
              className="py-1 w-full font-bold border-2 rounded-md text-white bg-[rgba(0,0,0,.85)] cursor-pointer sm:py-3 sm:text-lg"
            >
              SIGN IN
            </button>
          </div>
          <Link
            to={AppRoutes.HOME}
            className="text-sm sm:text-lg flex items-center justify-center gap-1 py-1 font-bold border-2 border-gray-800 rounded-md text-gray-800 cursor-pointer sm:py-3"
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
            </svg>
            Home
          </Link>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
