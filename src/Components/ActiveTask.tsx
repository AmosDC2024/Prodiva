import { useState, useEffect } from "react";
import type { Task } from "../types/task";
import ActiveTaskSection from "./DesktopTaskBar"; 

const ActiveTask = ({
  tasks,
  setProgress
}: {
  tasks: Task[];
  setProgress?: (val: number) => void;
}) => {

  // =========================
  // 🧠 FILTER TODAY TASKS
  // =========================

  const today = new Date().toISOString().split("T")[0];

  const todaysTasks = tasks
    .filter(t => t.date === today && !t.completed)
    .sort((a, b) => a.startTime.localeCompare(b.startTime));

  // =========================
  // 🎯 STATE
  // =========================

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [phase, setPhase] = useState<"idle" | "running" | "break">("idle");

  const currentTask = todaysTasks[currentIndex];

  const [timeLeft, setTimeLeft] = useState(
    currentTask ? currentTask.duration * 60 : 0
  );

  // =========================
  // 📊 PROGRESS CALC
  // =========================

  const progressPercent = currentTask
    ? Math.round(
        ((currentTask.duration * 60 - timeLeft) /
          (currentTask.duration * 60)) *
          100
      )
    : 0;

  // =========================
  // 🔥 SYNC PROGRESS TO DASHBOARD
  // =========================

  useEffect(() => {
    if (setProgress) {
      setProgress(progressPercent);
    }
  }, [progressPercent, setProgress]);

  // =========================
  // ⏱ TIMER EFFECT
  // =========================

  useEffect(() => {
    if (!isRunning) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);

          alert("Task completed!");

          setPhase("break");
          setIsRunning(false);

          return 10; // break countdown
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning]);

  // =========================
  // 🔁 BREAK → NEXT TASK
  // =========================

  useEffect(() => {
    if (phase !== "break") return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);

          setCurrentIndex(prev => prev + 1);
          setPhase("idle");

          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [phase]);

  // =========================
  // 🔄 RESET WHEN TASK CHANGES
  // =========================

  useEffect(() => {
    if (currentTask) {
      setTimeLeft(currentTask.duration * 60);
    }
  }, [currentTask]);

  // =========================
  // ▶ START BUTTON
  // =========================

  const startTask = () => {
    if (!currentTask) return;

    setIsRunning(true);
    setPhase("running");
  };

  // =========================
  // ⏱ FORMAT TIME
  // =========================

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  };

  // =========================
  // 🎨 UI
  // =========================

  return ( 
    <>
      <div className="flex justify-center items-center bg-[#0B1120] p-4 sm:hidden">
        
        <div className="relative w-full rounded-2xl p-6 
                        bg-gradient-to-br from-[#111827] to-[#0f172a] 
                        shadow-[0_0_40px_rgba(59,130,246,0.3)] 
                        border border-white/10">

          <p className="text-gray-400 text-sm mb-1">
            Active Task
          </p>

          <h2 className="text-white text-lg font-semibold mb-4">
            {currentTask ? currentTask.title : "No task"}
          </h2>

          <div className="relative flex justify-center items-center mb-6">

            <div className="absolute w-64 h-64 rounded-full bg-blue-500/20 blur-3xl" />

            <svg className="w-52 h-52 -rotate-90" viewBox="0 0 100 100">

              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="8"
                fill="transparent"
              />

              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="url(#gradient)"
                strokeWidth="8"
                fill="transparent"
                strokeDasharray="283"
                strokeDashoffset={
                  283 - (283 * timeLeft) / (currentTask?.duration * 60 || 1)
                }
                strokeLinecap="round"
              />

              <defs>
                <linearGradient id="gradient">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#60A5FA" />
                </linearGradient>
              </defs>

            </svg>

            <div className="absolute text-center">
              <p className="text-2xl font-semibold text-white">
                {formatTime(timeLeft)}
              </p>

              {phase === "break" && (
                <p className="text-xs text-gray-400 mt-2">
                  Next task in {timeLeft}s
                </p>
              )}
            </div>

          </div>

          <button
            onClick={startTask}
            disabled={isRunning || !currentTask}
            className="w-full py-3 rounded-xl 
                       bg-blue-600 disabled:opacity-40
                       hover:opacity-90 transition
                       text-white font-medium"
          >
            ▶ {isRunning ? "Running..." : "Continue Session"}
          </button>

        </div>
      </div>  

      <ActiveTaskSection />
    </>
  );
};

export default ActiveTask;