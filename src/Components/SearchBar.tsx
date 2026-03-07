import { MagnifyingGlassIcon, BellAlertIcon } from "@heroicons/react/24/outline";
import avater from "../assets/avatar-jessica.jpeg";

const SearchBar = () => {

  return (
    <div className="hidden md:flex w-full bg-[#0F172A] px-5 py-4 justify-between items-start h-20 rounded-2xl">
      <div className="flex items-center">
        {/* Desktop Search */}
        <div className="hidden md:flex items-center bg-[#111827] 
                        w-full max-w-md gap-3 rounded-3xl px-4 py-2">
          <MagnifyingGlassIcon className="h-6 w-6 text-blue-400" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent w-full outline-none text-white placeholder-gray-400"
          />
        </div>
      </div>

      {/* ================= NOTIFICATION & USER ================= */}
      <div className="hidden md:flex items-center gap-4 bg-[#111827] px-5">

        <BellAlertIcon className="h-6 w-6 text-gray-300 cursor-pointer" />

        <select className="hidden md:block bg-transparent text-white outline-none">
          <option>Amos DC</option>
          <option>Doe John</option>
          <option>John Doe</option>
        </select>

        <img
          src={avater}
          alt="User Avatar"
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>

    </div>
  );
};

export default SearchBar;
