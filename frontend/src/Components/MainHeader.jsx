import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
Outlet;
const MainHeader = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default MainHeader;
