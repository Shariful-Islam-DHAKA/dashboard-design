import React from "react";
import moment from "moment";

import { IoMdArrowDropdown } from "react-icons/io";

const Header = () => {
  const day = moment().format("dddd");
  const date = moment().format("MMMM Do YYYY");
  return (
    <div className=" bg-gray-300 fixed top-0 right-0 h-20 left-40 ">
      <div className="flex mr-2 gap-5 justify-end mt-3">
        <div>
          <p className="font-bold ">{day}</p>
          <p className="text-gray-600 ">{date}</p>
        </div>
        <div className="flex items-center ">
          <img
            src="https://cdn-icons-png.flaticon.com/512/5556/5556468.png"
            alt="profileImg"
            className=" w-12 h-12 "
          />
          <div className="flex flex-col">
            <p className="font-bold">Shariful Islam</p>
            <p className="flex items-center">
              Admin <IoMdArrowDropdown />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
