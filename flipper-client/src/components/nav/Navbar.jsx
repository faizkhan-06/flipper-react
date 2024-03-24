import { IoIosSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { RiMenu2Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  let [displayVal, setDisplayVal] = useState("none");
  let [icon, setIcon] = useState(<RiMenu2Line />);
  function handleNav() {
    if (displayVal !== "block") {
      setDisplayVal("block");
      setIcon(<IoIosClose className="text-[2rem]" />);
    } else {
      setDisplayVal("none");
      setIcon(<RiMenu2Line />);
    }
  }
  return (
    <>
      <div className="flex text-indigo-50 xl:justify-center xl:items-center p-4 container">
        <div className="hidden xl:block ml-auto h-8 w-2/4 rounded-3xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-0.5">
          <div className="flex h-full w-auto items-center justify-center rounded-3xl bg-gray-900 text-sm">
            <ul className=" flex gap-16 justify-center flex-col xl:flex-row items-center">
              <li className="list-none border-b-2 border-transparent cursor-pointer transition duration-300 ease-in-out hover:border-b-white hover:border-solid hover:border-opacity-100 hover:text-md">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="list-none border-b-2 border-transparent cursor-pointer transition duration-300 ease-in-out hover:border-b-white hover:border-solid hover:border-opacity-100 hover:text-md">
                <NavLink to="/">Explore</NavLink>
              </li>
              <li className="list-none border-b-2 border-transparent cursor-pointer transition duration-300 ease-in-out hover:border-b-white hover:border-solid hover:border-opacity-100 hover:text-md">
                <NavLink to="/">Channels</NavLink>
              </li>
              <li className="list-none border-b-2 border-transparent cursor-pointer transition duration-300 ease-in-out hover:border-b-white hover:border-solid hover:border-opacity-100 hover:text-md">
                <NavLink to="/">Community</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="hidden xl:flex ml-auto  gap-5 h-8 justify-center items-center">
          <span>
            <IoIosSearch className=" text-lg font-normal hover:text-white hover:cursor-pointer hover:font-bold " />
          </span>
          <span>
            <FaRegUser className=" text-sm font-normal  hover:text-white hover:cursor-pointer hover:font-bold " />
          </span>
        </div>
      </div>
      <div className="flex xl:hidden">
        <div
          className="xl:hidden align-left absolute w-screen top-0 bg-white h-screen pt-[5rem]"
          style={{ display: displayVal }}
        >
          <div className="flex flex-row items-center justify-evenly left-0 mb-10">
            <span>
              <IoIosSearch className=" text-[4rem] font-normal hover:text-white hover:cursor-pointer hover:font-bold " />
            </span>
            <span className="flex justify-center items-center">
              <FaRegUser className=" text-[3rem]  font-normal  hover:text-white hover:cursor-pointer hover:font-bold " />
            </span>
          </div>
          <ul className="gap-6 flex flex-col  pl-10">
            <div>
              <li>Home</li>
            </div>
            <div>
              <li>Explore</li>
            </div>
            <div>
              <li>Channels</li>
            </div>
            <div>
              <li>Community</li>
            </div>
          </ul>
        </div>
        <button
          className="h-10 w-10 bg-white rounded-full z-10 absolute right-4 top-4 xl:hidden flex items-center justify-center"
          onClick={handleNav}
        >
          {icon}
        </button>
      </div>
    </>
  );
};

export default Navbar;
