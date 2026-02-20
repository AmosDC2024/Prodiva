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
import {useState} from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="md:hidden bg-[#0B1220] px-4 py-3">
        <div
          className="flex items-center justify-between 
                  bg-[#111827] rounded-2xl px-4 py-2"
        >
          {/* LEFT — Menu */}
          <Bars3Icon
            className="h-6 w-6 text-[#F8FAFC]"
            onClick={() => setToggle(true)}
          />

          {/* RIGHT — Search + Notification */}
          <div className="flex items-center gap-4 relative">
            {/* Search Toggle */}
            <button onClick={() => setOpen(!open)} className="text-gray-300">
              <MagnifyingGlassIcon className="h-6 w-6" />
            </button>

            {/* Notification */}
            <BellAlertIcon className="h-6 w-6 text-[#F8FAFC]" />

            {/* Expanding Search (Anchored Right) */}
            <div
              className={`absolute right-0 top-12 transition-all duration-300 ease-in-out
          ${open ? "w-64 opacity-100" : "w-0 opacity-0 pointer-events-none"}
        `}
            >
              <div
                className="flex items-center bg-[#111827] 
                        rounded-2xl px-3 py-2 shadow-lg"
              >
                <MagnifyingGlassIcon className="h-5 w-5 text-blue-400 mr-2" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-transparent w-full outline-none 
                       text-white placeholder-gray-400"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE SIDEBAR OVERLAY */}
      {toggle && (
        <div className="fixed inset-0 z-50 flex">
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

              <ul className="space-y-6 text-[#F8FAFC]">
                <li className="flex items-center gap-3 hover:text-[#3B82F6] transition">
                  <HomeIcon className="h-6 w-6" />
                  Dashboard
                </li>

                <li className="flex items-center gap-3 hover:text-[#3B82F6] transition">
                  <ChartBarIcon className="h-6 w-6" />
                  Analytics
                </li>

                <li className="flex items-center gap-3 hover:text-[#3B82F6] transition">
                  <ArrowPathRoundedSquareIcon className="h-6 w-6" />
                  Planner
                </li>

                <li className="flex items-center gap-3 hover:text-[#3B82F6] transition">
                  <HeartIcon className="h-6 w-6" />
                  Reflection
                </li>
              </ul>
            </div>

            <div className="space-y-5 text-[#94A3B8]">
              <div className="flex items-center gap-3 hover:text-[#F8FAFC] transition">
                <Cog6ToothIcon className="h-6 w-6" />
                Settings
              </div>

              <div className="flex items-center gap-3 hover:text-[#F8FAFC] transition">
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

          <ul className="space-y-8 text-[#F8FAFC]">
            <li className="flex items-center gap-3 hover:text-[#3B82F6] transition">
              <HomeIcon className="h-6 w-6" />
              Dashboard
            </li>

            <li className="flex items-center gap-3 hover:text-[#3B82F6] transition">
              <ChartBarIcon className="h-6 w-6" />
              Analytics
            </li>

            <li className="flex items-center gap-3 hover:text-[#3B82F6] transition">
              <ArrowPathRoundedSquareIcon className="h-6 w-6" />
              Planner
            </li>

            <li className="flex items-center gap-3 hover:text-[#3B82F6] transition-transform">
              <HeartIcon className="h-6 w-6" />
              Reflection
            </li>
          </ul>
        </div>

        <div className="space-y-6 text-[#94A3B8]">
          <div className="flex items-center gap-3 hover:text-[#F8FAFC] transition">
            <Cog6ToothIcon className="h-6 w-6" />
            Settings
          </div>

          <div className="flex items-center gap-3 hover:text-[#F8FAFC] transition">
            <ArrowRightEndOnRectangleIcon className="h-6 w-6" />
            Logout
          </div>
        </div>
      </aside>
    </>
  );
};

export default Header;
