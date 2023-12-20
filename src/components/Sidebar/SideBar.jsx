import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Accordion } from "flowbite-react";
import AppRoutes from "../../router/routes";
import { Link } from "react-router-dom";
import axios from "axios";

const CATEGORYS = [
  { URL: "", title: "ALL" },
  {
    URL: "unisex",
    title: "UNISEX",
    subcategory: ["basketball", "training", "running", "Track/field"],
  },
  {
    URL: "men",
    title: "MEN",
    subcategory: ["basketball", "training", "running", "hiking"],
  },
  {
    URL: "women",
    title: "WOMEN",
    subcategory: ["basketball", "training", "running"],
  },
  {
    URL: "boys",
    title: "BOYS",
    subcategory: ["basketball", "training"],
  },
  {
    URL: "girls",
    title: "GIRLS",
    subcategory: ["basketball", "running"],
  },
];

function SideBar({ openSideBar, setOpenSideBar }) {
  const [showSubcategory, setShowSubcategory] = useState("");
  // const [categories, setCategories] = useState([]);
  // const [subcategories, setSubcategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    //GET ALL CATEGORY
    let cname = [];
    axios("http://localhost:8000/api/categories")
      .then((res) => {
        console.log(res.data.data.categories);
        res.data.data.categories.forEach((category) => {
          cname.push(category.name);
        });
      })
      .catch((err) => console.log(err.message));

    setCategories(cname);

    //GET ALL SUBCATEGORY
    //   let scname = [];
    //   axios("http://localhost:8000/api/subcategories")
    //     .then((res) => {
    //       console.log(res.data.data.subcategories);
    //       res.data.data.subcategories.forEach((subcategory) => {
    //         scname.push(subcategory.name);
    //       });
    //     })
    //     .catch((err) => console.log(err.message));

    //   setSubcategories(scname);
    //   console.log(subcategories, "dssdsdsdsdsdsd");
  }, []);

  return (
    <div
      id="bg"
      onClick={(e) => (e.target.id === "bg" ? setOpenSideBar(false) : null)}
      className={`fixed top-0 h-screen w-full transition-all duration-[1s] delay-0 ease z-[2000] ${
        openSideBar ? "left-0" : "-left-[120rem] w-0"
      } `}
    >
      <div
        className={`w-full h-[100%] sm:w-[30rem] md:w-1/2 lg:w-1/3 xl:w-[37rem] text-center bg-white`}
        // onClickCapture={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-center border-b-[1px] border-black">
          <span>
            <svg
              className="w-[2.5rem] h-[2.5rem]"
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
          </span>
        </div>
        <div className="pt-5 px-4 flex flex-col gap-5 lg:px-8 lg:pt-8">
          {CATEGORYS.map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-between p-3 "
            >
              <div className="flex items-center justify-between w-full cursor-pointer">
                <Link
                  to={category.URL}
                  onClick={() => setOpenSideBar(false)}
                  className="font-bold lg:text-lg w-[90%] text-left"
                >
                  {category.title}
                </Link>
                <span
                  className=" w-[7%]"
                  onClick={() =>
                    category.subcategory
                      ? setShowSubcategory(category.title)
                      : navigate("/")
                  }
                >
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1024"
                    height="1024"
                    viewBox="0 0 1024 1024"
                  >
                    <g transform="rotate(90 512 512)">
                      <path
                        fill="currentColor"
                        d="m488.832 344.32l-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872l319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0"
                      />
                    </g>
                  </svg>
                </span>
              </div>

              <div
                className={` ${
                  showSubcategory === `${category.title}`
                    ? "w-full flex flex-col items-start pl-5 pt-1 text-gray-600"
                    : "hidden"
                }  `}
              >
                {category.subcategory &&
                  category.subcategory.map((sub, index) => (
                    <Link
                      key={index}
                      to={`${category.URL}/${sub}`}
                      className="cursor-pointer"
                      onClick={() => setOpenSideBar(false)}
                    >
                      {sub}
                    </Link>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SideBar;
// {CATEGORYS.map((category, index) => (
//   <div key={index} className="flex items-center justify-between">
//     <title className="">
//       <NavLink
//         to={`${category.URL}`}
//         className="w-full mx-auto text-md cursor-pointer font-bold py-2 md:py-3 md:text-lg flex items-center justify-between"
//         key={index}
//         onClick={() => setOpenSideBar(false)}
//       >
//         {category.title}
//         <span>
//           <svg
//             className="w-6 h-6 rotate-90 "
//             xmlns="http://www.w3.org/2000/svg"
//             width="1024"
//             height="1024"
//             viewBox="0 0 1024 1024"
//           >
//             <path
//               fill="currentColor"
//               d="m488.832 344.32l-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872l319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0"
//             />
//           </svg>
//         </span>
//       </NavLink>
//     </title>
//     <div>
//       {category.subcategory.map((sub, index) => (
//         <div key={index}>{sub}</div>
//       ))}
//     </div>
//   </div>
// ))}
