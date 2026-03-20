import type { Task } from "../types/task";
import ActiveTaskSection from "./DesktopTaskBar"; 

const ActiveTask = ({ tasks }: { tasks: Task[] }) => {

  const activeTask = tasks.find(t => !t.completed);

  return ( 
    <>
      <div className="flex justify-center items-center p-4 sm:hidden">

        <div className="relative w-full rounded-2xl p-6 
                        bg-gradient-to-br from-[#111827] to-[#0f172a] 
                        shadow-[0_0_40px_rgba(59,130,246,0.3)] 
                        border border-white/10">

          <p className="text-gray-400 text-sm mb-1">
            Active Task
          </p>

          <h2 className="text-white text-lg font-semibold mb-4">
            {activeTask ? activeTask.title : "No active task"}
          </h2>

          <button className="w-full py-3 rounded-xl 
                             bg-blue-600 hover:opacity-90 transition
                             text-white font-medium">
            ▶ Continue Session
          </button>

        </div>
      </div>  

      <ActiveTaskSection />
    </>
  );
};

export default ActiveTask;