import React from "react";
import { FaHome, FaTasks } from "react-icons/fa";
import { GoProject } from "react-icons/go";
import { IoMdSettings } from "react-icons/io";
import { MdHelpCenter } from "react-icons/md";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";

const SideBar = () => {
  return (
    <div className="h-full bg-gray-300 fixed top-0 left-0 bottom-0 w-40">
      <div>
        <img
          src={logo}
          alt="LogoIpsum"
          className="w-56 p-5 mb-[20px]
        "
        />
        <div>
          <NavLink
            to={"/"}
            className="flex mb-5 gap-4 items-center p-2 rounded-md"
          >
            <FaHome className="text-2xl " />
            <p className="font-bold">DashBoard</p>
          </NavLink>

          <NavLink
            to={"projects"}
            className="flex mb-5  gap-4 items-center p-2 rounded-md"
          >
            <GoProject className="text-2xl " />
            <p className="font-bold">Projects</p>
          </NavLink>
          <NavLink
            to={"tasks"}
            className="flex mb-5  gap-4 items-center p-2 rounded-md"
          >
            <FaTasks className="text-2xl " />
            <p className="font-bold">Tasks</p>
          </NavLink>
          <NavLink
            to={"settings"}
            className="flex mb-5  gap-4 items-center p-2 rounded-md"
          >
            <IoMdSettings className="text-2xl " />
            <p className="font-bold">Sittings</p>
          </NavLink>
          <NavLink
            to={"help"}
            className="flex mb-5  gap-4 items-center p-2 rounded-md"
          >
            <MdHelpCenter className="text-2xl " />
            <p className="font-bold">Help</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
