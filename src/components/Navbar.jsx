import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import logofirebase from "../images/logos_firebase.jpg";
const Navbar = ({ openmodal, closemodal,search,setSearch }) => {
  return (
    // main div
    <div className="flex items-center justify-center gap-4 flex-col h-50">
      <div className="bg-gray-50 h-23 w-105 rounded-2xl flex items-center justify-center">
        {/* logo and name*/}
        <div className="flex items-center gap-2 justify-center w-100">
          <img className="h-14 cursor-pointer" src={logofirebase} alt="logo" />
          <h2 className="text-3xl font-bold">FireBase Contact App</h2>
        </div>
      </div>
      {/* search and add icons */}
      <div className="h-15 flex items-center justify-center flex-row gap-4 rounded-2xl w-109">
        <div className="flex flex-row border-gray-400 border-2 rounded-2xl items-center w-100">
          <CiSearch className="size-15 text-gray-400" />
          <input
            className=" h-10 text-gray-400 w-67 text-2xl font-bold"
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e)=>{setSearch(e.target.value)}}
          />
        </div>
        {/* add icon */}
        <button className="bg-white h-17 flex items-center justify-center  w-20 rounded-full">
          <FaPlus onClick={openmodal} className="size-10 cursor-pointer" />
        </button>
      </div>
    </div>
  );
};
export default Navbar;