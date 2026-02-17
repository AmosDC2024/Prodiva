import logo from "../assets/transparentlogo.png";
import {Bars3Icon} from "@heroicons/react/24/outline";
import {SunIcon} from "@heroicons/react/24/outline";
import {XMarkIcon} from "@heroicons/react/24/outline";
import {useState} from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    // NAV DESKTOP
    <div className="min-h-50vh">
      <nav className="text-amber-100 text-3xl ">
        <img src={logo} alt="" className="hidden md:flex h-50" />
        <div className="hidden md:flex h-200 flex-col justify-between px-12 py-10 bg-[#111827] w-80 ">
          <ul >
            <li transition-transform ease-in-out hover:scale-110>
              <a href="" className="">
                Dashboard
              </a>
            </li>
            <li className="mt-8 transition-transform ease-in-out hover:scale-110">
              <a href="">Analytics</a>
            </li>
            <li className="mt-8 transition-transform ease-in-out hover:scale-110">
              <a href="">Planner</a>
            </li>
            <li className="mt-8 transition-transform ease-in-out hover:scale-110">
              <a href="">Reflection</a>
            </li>
          </ul>
          <ul>
            <li className="transition-transform ease-in-out hover:scale-110">
              <a href="">Logout</a>
            </li>
            <button className="mt-3">Settings</button>
            <button className="block mt-3">theme</button>
          </ul>
        </div>
      </nav>

      {/* NAV MOBILE */}

      <nav className="flex justify-between px-8 md:hidden lg:hidden">
        <div className=" flex justify-between items-center w-full bg-[#111827] px-6  rounded-4xl mt-4">
          {!toggle ? (
            <Bars3Icon
              className="h-10 sm:h-15  text-[#F8FAFC]"
              onClick={() => {
                setToggle(true);
              }}
            />
          ) : (
            <XMarkIcon
              className=" h-10 sm:h-15 text-red-800 "
              onClick={() => {
                setToggle(false);
              }}
            />
          )}

          <img src={logo} alt="" className="h-20 sm:h-40" />

          {toggle && (
            <nav className="  text-amber-100 flex flex-col items-start justify-start mt-30 absolute top-0 ">
              <div className=" text-2xl sm: bg-gray-700 p-10 text-[25px] ">
                <ul >
                  <li className="transition-transform ease-in-out hover:scale-110">
                    <a href="" className="">
                      Dashboard
                    </a>
                  </li>
                  <li className="mt-3 transition-transform ease-in-out hover:scale-110">
                    <a href="">Analytics</a>
                  </li>
                  <li className="mt-3 transition-transform ease-in-out hover:scale-110">
                    <a href="">Planner</a>
                  </li>
                  <li className="mt-3 transition-transform ease-in-out hover:scale-110">
                    <a href="">Reflection</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="">Logout</a>
                  </li>
                  <button className="mt-3 transition-transform ease-in-out hover:scale-110">Settings</button>
                  <button className="block mt-3 transition-transform ease-in-out hover:scale-110">theme</button>
                </ul>
              </div>
            </nav>
          )}

          <SunIcon className="h-10 sm:h-15 w-15  text-[#F8FAFC] bg-[#08172e] rounded-[50%]" />
        </div>
      </nav>
    </div>
  );
};

export default Header;
