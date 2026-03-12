import type { TaskCategory } from "../types/task";

export const categoryColors: Record<TaskCategory, string> = {
  Focus: "bg-blue-500",
  Meeting: "bg-purple-500",
  Work: "bg-cyan-500",
  Break: "bg-green-500",
  Personal: "bg-orange-500",
  Study: "bg-indigo-500",
  Health: "bg-emerald-500",
};

export default categoryColors;