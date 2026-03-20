import { StarField } from "./StarField";

export const DesktopTodaysFocus = () => {

  const progress = 65;

  return (
    <div className="hidden md:flex relative overflow-hidden w-full max-w-1/2 items-center gap-8 p-6 rounded-2xl border border-white/10 bg-[#0B1120] shadow-[0_0_25px_rgba(59,130,246,.2)]">

      <StarField/>

      <div className="relative w-32 h-32 flex items-center justify-center">

        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:`conic-gradient(#3b82f6 ${progress*3.6}deg, rgba(255,255,255,.08) 0)`
          }}
        />

        <div className="w-24 h-24 bg-[#020617] rounded-full flex items-center justify-center text-blue-400 text-xl font-semibold">
          25:00
        </div>

      </div>

      <div className="relative space-y-3 text-gray-300">

        <div className="flex items-center gap-3">
          <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
          Focus Time
          <span className="ml-auto text-white">{progress}%</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="w-3 h-3 bg-green-400 rounded-full"></span>
          Remaining
          <span className="ml-auto text-white">25%</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="w-3 h-3 bg-red-400 rounded-full"></span>
          Missed
          <span className="ml-auto text-white">10%</span>
        </div>

      </div>

    </div>
  );
}; 

export default DesktopTodaysFocus