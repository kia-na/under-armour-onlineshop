import React from "react";
import { NavLink } from "react-router-dom";

const CATEGORYS = [
  { URL: "", title: "ALL" },
  { URL: "unisex", title: "UNISEX" },
  { URL: "men", title: "MEN" },
  { URL: "women", title: "WOMEN" },
  { URL: "boys", title: "BOYS" },
  { URL: "girls", title: "GIRLS" },
];
function SideBar({ openSideBar, setOpenSideBar }) {
  console.log(openSideBar);
  return (
    <>
      <div
        className={`h-screen text-center bg-gray-200 px-1 flex flex-col gap-6  pt-10   ${
          openSideBar ? "w-full relative lg:w-1/4" : "absolute left-[-20rem]"
        }`}
      >
        {CATEGORYS.map((category) => (
          <NavLink
            to={`${category.URL}`}
            className="w-full mx-auto text-sm bg-black cursor-pointer lg:text-left lg:pl-16 py-2 text-white md:py-3 md:text-lg "
            onClick={() => setOpenSideBar(false)}
          >
            {category.title}
          </NavLink>
        ))}
      </div>
    </>
  );
}

export default SideBar;
