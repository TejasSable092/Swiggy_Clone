import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
const Header = () => {
  const [sidenav, setSidenav] = useState(!false);
  return (
    <>
      <div className=" bg-[#ecf0f1] w-[100%] py-3 px-2 fixed top-0 left-0 z-10">
        {/* Logo div */}
        <div className=" mx-auto flex items-center justify-between md:justify-around w-full">
          <div className=" flex">
            <Link to={"/"}>
              <img
                src={"src/assets/Swiggy-logo.png"}
                alt="swiggylogo"
                className=" w-12 cursor-pointer"
              />
            </Link>

            <div className=" hover:text-[#d35400] cursor-pointer text-[#3d4152]">
              <p className=" flex items-center justify-center gap-1 text-[15px]">
                Other
                <span className="text-[#d35400]">
                  <IoIosArrowDown />
                </span>
              </p>
            </div>
          </div>

          {/* Nav Options */}
          <div className=" sm:flex gap-7 hidden text-[15px] text-[#3d4152] md:flex,gap-7 ">
            <Link to={"/"}>
              <p className=" cursor-pointer hover:text-[#d35400] flex items-center justify-center gap-1 ">
                <FaHome size={12} />
                Home
              </p>
            </Link>
            <Link to="/Search">
              <p className=" cursor-pointer hover:text-[#d35400] flex items-center justify-center gap-1 ">
                <FaSearch size={12} />
                Search
              </p>
            </Link>
            <Link to={"/SignIn"}>
              <p className=" cursor-pointer hover:text-[#d35400] flex items-center gap-2">
                <FaUser size={12} />
                SignIN
              </p>
            </Link>
            <Link to={"/Cart"}>
              <p className=" cursor-pointer hover:text-[#d35400] flex items-center gap-2 ">
                <FaShoppingCart size={12} />
                Cart
              </p>
            </Link>
          </div>

          {/* Responsive Menu */}
          {!sidenav ? (
            <div className=" block sm:hidden text-[15px] text-[#3d4152] absolute top-[0] right-0 p-16 bg-[#bec1c2] h-screen pt-[160px] font-semibold">
              <div
                className=" absolute top-5 cursor-pointer right-4 text-2xl"
                onClick={() => setSidenav(!sidenav)}
              >
                <RxCross2 />
              </div>
               <Link to={"/"}>
              <p className=" cursor-pointer hover:text-[#d35400] flex items-center justify-center gap-1 ">
                <FaHome size={12} />
                Home
              </p>
               </Link>
                <Link to={"/Search"}>
              <p className=" cursor-pointer hover:text-[#d35400] flex items-center gap-2 mt-4 ">
                <FaSearch size={12} />
                Search
              </p>
                 </Link>
              
              <Link to={"/SignIn"}>
              <p className=" cursor-pointer hover:text-[#d35400] flex items-center gap-2 mt-4">
                <FaUser size={12} />
                SignIN
              </p>
              </Link>
              <Link to={"/Cart"}>
              <p className=" cursor-pointer hover:text-[#d35400] flex items-center gap-2 mt-4">
                <FaShoppingCart size={12} />
                Cart
              </p>
              </Link>
            </div>
          ) : (
            ""
          )}
          {/*hamburger */}
          <div className=" sm:hidden">
            <p
              className=" cursor-pointer mr-6"
              onClick={() => setSidenav(!sidenav)}
            >
              <GiHamburgerMenu size={12} />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
