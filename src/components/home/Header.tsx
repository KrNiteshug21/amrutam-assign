import React from "react";
import { MdLocationOn } from "react-icons/md";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa6";

const Header: React.FC = () => {
  return (
    <div className="place-content-center grid bg-gray-300 p-10">
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl">
            Find expert Doctors for an In-clinic session here{" "}
          </h2>
        </div>
        <form className="flex justify-center items-center gap-4 my-4">
          <div className="relative flex-1 basis-1/3">
            <MdLocationOn
              size={24}
              className="top-1/2 left-2 absolute text-green-600 -translate-y-1/2 t"
            />
            <input
              type="text"
              placeholder="Select Location"
              className="border-2 border-gray-400 px-8 py-2 rounded-md w-full outline-none"
            />
            <RiArrowDropDownLine
              size={32}
              className="top-1/2 right-2 absolute text-gray-500 -translate-y-1/2"
            />
          </div>
          <div className="relative flex-1 basis-2/3">
            <input
              type="text"
              placeholder="eg. Doctor, specialisation, clinic name"
              className="border-2 border-gray-400 px-8 py-2 rounded-md w-full"
            />
            <FaArrowRight
              size={24}
              className="top-1/2 right-3 absolute text-gray-500 -translate-y-1/2"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Header;
