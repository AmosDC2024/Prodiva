
const ActiveTaskSection = () => {
  return (
    <section className="hidden sm:flex w-full ">
      <div className="relative flex items-center justify-between w-full
                      rounded-2xl p-8
                      bg-gradient-to-br from-[#111827] to-[#0f172a]
                      border border-white/10
                      shadow-[0_0_40px_rgba(59,130,246,0.15)]">

        {/* LEFT SIDE */}
        <div className="max-w-xl">

          <p className="text-gray-400 text-sm mb-2">
            Active Task
          </p>

          <h2 className="text-white text-2xl font-semibold mb-4">
            Deep Work Session: Finish UI Design
          </h2>

          {/* Tag + Time */}
          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 rounded-full 
                             bg-blue-500/20 text-blue-400 text-xs">
              Design
            </span>

            <span className="text-gray-400 text-sm">
              2:45 PM – 3:30 PM
            </span>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-4">

            <button className="px-6 py-2 rounded-lg
                               bg-gradient-to-r from-blue-600 to-blue-500
                               text-white text-sm font-medium
                               hover:opacity-90 transition">
              ▶ Start
            </button>

            <span className="px-4 py-2 rounded-lg 
                             bg-white/5 border  border-white/10
                             text-gray-300 text-sm">
              ⚡ Focus Mode
            </span>

            <span className="px-4 py-2 rounded-lg 
                             bg-white/5 border border-white/10
                             text-gray-300 text-sm">
              🔵 High Priority
            </span>

          </div>
        </div>

        {/* RIGHT SIDE - TIMER */}
        <div className="relative flex items-center justify-center">

          {/* Glow */}
          <div className="absolute w-72 h-72 bg-blue-500/20 blur-3xl rounded-full" />

          {/* SVG Circle */}
          <svg
            className="w-56 h-56 -rotate-90"
            viewBox="0 0 100 100"
          >
            {/* Background circle */}
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="8"
              fill="transparent"
            />

            {/* Progress circle */}
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="url(#gradient)"
              strokeWidth="8"
              fill="transparent"
              strokeDasharray="283"
              strokeDashoffset="40"
              strokeLinecap="round"
            />

            <defs>
              <linearGradient id="gradient">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#60A5FA" />
              </linearGradient>
            </defs>
          </svg>

          {/* Time Text */}
          <div className="absolute text-center">
            <p className="text-3xl font-semibold text-white">
              25:00
            </p>
            <div className="w-14 h-1 bg-blue-500 mx-auto mt-2 rounded-full" />
          </div>

        </div>

      </div>
    </section>
  );
};

export default ActiveTaskSection;