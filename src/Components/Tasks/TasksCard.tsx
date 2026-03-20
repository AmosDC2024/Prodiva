import type { Task } from "../../types/task";

interface Props {
  task: Task;
}

export const TaskCard = ({ task }: Props) => {
  return (
    <div className="p-4 rounded-xl border border-white/10 bg-white/5">

      <h3 className="text-white font-medium">
        {task.title}
      </h3>

      <p className="text-sm text-gray-400 mt-1">
        {task.startTime} • {task.category}
      </p>

      <p className="text-xs text-gray-500 mt-2">
        {task.date}
      </p>

    </div>
  );
};