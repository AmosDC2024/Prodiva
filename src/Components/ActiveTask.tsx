import ActiveTaskSection from "./DesktopTaskBar";
const ActiveTask = () => {
  return ( 
    <>
    <div className="flex justify-center items-center bg-[#0B1120] p-6 sm:hidden">
      
      {/* Card */}
      <div className="relative sm:w-full  w-full rounded-2xl p-6 
                      bg-gradient-to-br from-[#111827] to-[#0f172a] 
                      shadow-[0_0_40px_rgba(59,130,246,0.3)] 
                      border border-white/10">

        {/* Title */}
        <p className="text-gray-400 text-sm mb-1 sm:text-center ">
          Active Task
        </p>

        <h2 className="text-white text-xl font-semibold mb-6 sm:text-center sm:w-full">
          Design Dashboard UI
        </h2>

        {/* Circle Section */}
        <div className="relative flex justify-center items-center mb-8">

          {/* Outer Glow */}
          <div className="absolute w-64 h-64 rounded-full 
                          bg-blue-500/20 blur-3xl" />

          {/* SVG Progress Ring */}
          <svg
            className="w-56 h-56 -rotate-90"
            viewBox="0 0 100 100"
          >
            {/* Background Circle */}
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="8"
              fill="transparent"
            />

            {/* Progress Circle */}
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="url(#gradient)"
              strokeWidth="8"
              fill="transparent"
              strokeDasharray="283"
              strokeDashoffset="70"
              strokeLinecap="round"
            />

            {/* Gradient Definition */}
            <defs>
              <linearGradient id="gradient">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#60A5FA" />
              </linearGradient>
            </defs>
          </svg>

          {/* Timer Text */}
          <div className="absolute text-center">
            <p className="text-3xl font-semibold text-white">
              01:24:18
            </p>
            <div className="w-16 h-1 bg-blue-500 mx-auto mt-2 rounded-full" />
          </div>
        </div>

        {/* Button */}
        <button className="w-full py-3 rounded-xl 
                           bg-gradient-to-r from-blue-600 to-blue-500
                           hover:opacity-90 transition
                           text-white font-medium sm:max-w-sm">
          ▶ Continue Session
        </button>

      </div>
    </div>  
    <ActiveTaskSection />
    </>
  );
};

export default ActiveTask;