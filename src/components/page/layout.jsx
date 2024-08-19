import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";

const Layout = () => {
  return (
    <div>
      <Header />
      <SideBar />
      <div className=" mt-16 ml-40 p-5 ">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
