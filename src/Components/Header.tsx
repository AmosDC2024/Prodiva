import logo from "../assets/transparentlogo.png";
import {
  XMarkIcon,
  Bars3Icon,
  HomeIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  ArrowRightEndOnRectangleIcon,
  ArrowPathRoundedSquareIcon,
  HeartIcon,
  MagnifyingGlassIcon,
  BellAlertIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export  const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [open, setOpen] = useState(false);

  const linkClass = (isActive: boolean, baseColor: string) =>
    `flex items-center gap-3 transition ${
      isActive ? "text-[#3B82F6]" : baseColor
    }`;

  return (
    <>
      {/* MOBILE HEADER */}
      <header className="md:hidden bg-[#0B1220] px-4 py-3">
        <div className="flex items-center justify-between bg-[#111827] rounded-2xl px-4 py-2">
          {/* LEFT — Menu */}
          <Bars3Icon
            className="h-6 w-6 text-[#F8FAFC]"
            onClick={() => setToggle(true)}
          />

          {/* RIGHT — Search + Notification */}
          <div className="flex items-center gap-4 relative z-10">
            {/* Search Toggle */}
            <button onClick={() => setOpen(!open)} className="text-gray-300">
              <MagnifyingGlassIcon className="h-6 w-6" />
            </button>

            {/* Notification */}
            <BellAlertIcon className="h-6 w-6 text-[#F8FAFC]" />

            {/* Expanding Search */}
            <div
              className={`absolute right-0 top-12 transition-all duration-300 ease-in-out
              ${open ? "w-64 opacity-100" : "w-0 opacity-0 pointer-events-none"}`}
            >
              <div className="flex items-center bg-[#111827] rounded-2xl px-3 py-2 shadow-lg">
                <MagnifyingGlassIcon className="h-5 w-5 text-blue-400 mr-2" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-transparent w-full outline-none text-white placeholder-gray-400"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE SIDEBAR */}
      {toggle && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          {/* Overlay */}
          <div
            className="bg-black/50 w-full"
            onClick={() => setToggle(false)}
          />

          {/* Sidebar */}
          <aside className="w-72 bg-[#111827] p-6 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-8">
                <img src={logo} alt="Prodiva Logo" className="h-10" />
                <XMarkIcon
                  className="h-6 w-6 text-[#F8FAFC]"
                  onClick={() => setToggle(false)}
                />
              </div>

              <ul className="space-y-6">
                <NavLink
                  to="/"
                  onClick={() => setToggle(false)}
                  className={({ isActive }) =>
                    linkClass(isActive, "text-[#F8FAFC]")
                  }
                >
                  <HomeIcon className="h-6 w-6" />
                  Dashboard
                </NavLink>

                <NavLink
                  to="/analytics"
                  onClick={() => setToggle(false)}
                  className={({ isActive }) =>
                    linkClass(isActive, "text-[#F8FAFC]")
                  }
                >
                  <ChartBarIcon className="h-6 w-6" />
                  Analytics
                </NavLink>

                <NavLink
                  to="/planner"
                  onClick={() => setToggle(false)}
                  className={({ isActive }) =>
                    linkClass(isActive, "text-[#F8FAFC]")
                  }
                >
                  <ArrowPathRoundedSquareIcon className="h-6 w-6" />
                  Planner
                </NavLink>

                <NavLink
                  to="/reflection"
                  onClick={() => setToggle(false)}
                  className={({ isActive }) =>
                    linkClass(isActive, "text-[#F8FAFC]")
                  }
                >
                  <HeartIcon className="h-6 w-6" />
                  Reflection
                </NavLink>
              </ul>
            </div>

            <div className="space-y-5">
              <NavLink
                to="/settings"
                onClick={() => setToggle(false)}
                className={({ isActive }) =>
                  linkClass(isActive, "text-[#94A3B8]")
                }
              >
                <Cog6ToothIcon className="h-6 w-6" />
                Settings
              </NavLink>

              <div className="flex items-center gap-3 text-[#94A3B8] hover:text-[#F8FAFC] transition">
                <ArrowRightEndOnRectangleIcon className="h-6 w-6" />
                Logout
              </div>
            </div>
          </aside>
        </div>
      )}

      {/* DESKTOP SIDEBAR */}
      <aside className="hidden md:flex md:flex-col md:w-72 md:h-screen md:bg-[#111827] md:p-8 md:justify-between">
        <div>
          <img src={logo} alt="Prodiva Logo" className="h-20 mb-12" />

          <ul className="space-y-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                linkClass(isActive, "text-[#F8FAFC]")
              }
            >
              <HomeIcon className="h-6 w-6" />
              Dashboard
            </NavLink>

            <NavLink
              to="/analytics"
              className={({ isActive }) =>
                linkClass(isActive, "text-[#F8FAFC]")
              }
            >
              <ChartBarIcon className="h-6 w-6" />
              Analytics
            </NavLink>

            <NavLink
              to="/planner"
              className={({ isActive }) =>
                linkClass(isActive, "text-[#F8FAFC]")
              }
            >
              <ArrowPathRoundedSquareIcon className="h-6 w-6" />
              Planner
            </NavLink>

            <NavLink
              to="/reflection"
              className={({ isActive }) =>
                linkClass(isActive, "text-[#F8FAFC]")
              }
            >
              <HeartIcon className="h-6 w-6" />
              Reflection
            </NavLink>
          </ul>
        </div>

        <div className="space-y-6">
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              linkClass(isActive, "text-[#94A3B8]")
            }
          >
            <Cog6ToothIcon className="h-6 w-6" />
            Settings
          </NavLink>

          <div className="flex items-center gap-3 text-[#94A3B8] hover:text-[#F8FAFC] transition">
            <ArrowRightEndOnRectangleIcon className="h-6 w-6" />
            Logout
          </div>
        </div>
      </aside>
    </>
  );
};

export default Header;