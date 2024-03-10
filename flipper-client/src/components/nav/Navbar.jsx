import { IoIosSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
const Navbar = () => {
  return (
    <>
      <div className="flex text-indigo-50 justify-center items-center p-4">
        <div className="ml-auto h-8 w-2/4 rounded-3xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-0.5 ">
          <div className="flex h-full w-auto items-center justify-center rounded-3xl bg-gray-900  text-sm">
            <ul className=" flex gap-16 justify-center items-center">
              <li className="list-none border-b-2 border-transparent cursor-pointer transition duration-300 ease-in-out hover:border-b-white hover:border-solid hover:border-opacity-100 hover:text-md">
                Home
              </li>
              <li className="list-none border-b-2 border-transparent cursor-pointer transition duration-300 ease-in-out hover:border-b-white hover:border-solid hover:border-opacity-100 hover:text-md">
                Explore
              </li>
              <li className="list-none border-b-2 border-transparent cursor-pointer transition duration-300 ease-in-out hover:border-b-white hover:border-solid hover:border-opacity-100 hover:text-md">
                Channels
              </li>
              <li className="list-none border-b-2 border-transparent cursor-pointer transition duration-300 ease-in-out hover:border-b-white hover:border-solid hover:border-opacity-100 hover:text-md">
                Community
              </li>
            </ul>
          </div>
        </div>
        <div className=" ml-auto flex gap-5 h-8 justify-center items-center">
          <span>
            <IoIosSearch className=" text-lg font-normal hover:text-white hover:cursor-pointer hover:font-bold " />
          </span>
          <span>
            <FaRegUser className=" text-sm font-normal  hover:text-white hover:cursor-pointer hover:font-bold " />
          </span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
