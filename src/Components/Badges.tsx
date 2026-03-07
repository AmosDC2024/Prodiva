import { useNavigate } from "react-router-dom";

export const Badges = () => {

  const navigate = useNavigate();

  return (
    <div className=" w-full md:max-w-1/2 relative p-6 rounded-2xl border border-white/10 bg-[#0B1120] shadow-[0_0_25px_rgba(59,130,246,.2)]">

      <div className="flex justify-between items-center mb-6">

        <h3 className="text-gray-200 text-lg">Badges</h3>

        <button
          onClick={()=>navigate("/badges")}
          className="text-blue-400 text-sm hover:text-blue-300"
        >
          View All →
        </button>

      </div>

      <div className="flex gap-4">

        <div className="flex items-center gap-3 px-4 py-3 bg-white/5 border border-white/10 rounded-xl">
          🔥
          <span className="text-gray-200">2-Day Streak</span>
        </div>

        <div className="flex items-center gap-3 px-4 py-3 bg-white/5 border border-white/10 rounded-xl">
          ⚡
          <span className="text-gray-200">100</span>
        </div>

        <div className="flex items-center gap-3 px-4 py-3 bg-white/5 border border-white/10 rounded-xl">
          🔥
          <span className="text-gray-200">10h Focus</span>
        </div>

      </div>

    </div>
  );
}; 

export default Badges;