import React from "react";
import { NavLink } from "react-router-dom";

function SideBar() {
  return (
    <>
      <div className="h-screen text-center	w-1/4 border-4 flex flex-col gap-5">
        <span className="text-blue-500">SideBar</span>
        <NavLink to="" className="text-red-500 underline">
          ALL
        </NavLink>
        <NavLink to="unisex" className="text-red-500 underline">
          UNISEX
        </NavLink>
        <NavLink to="men" className="text-red-500 underline">
          MEN
        </NavLink>
        <NavLink to="women" className="text-red-500 underline">
          WOMEN
        </NavLink>
        <NavLink to="boys" className="text-red-500 underline">
          BOYS
        </NavLink>
        <NavLink to="girls" className="text-red-500 underline">
          GIRLS
        </NavLink>
      </div>
    </>
  );
}

export default SideBar;
