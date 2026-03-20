import type { Task } from "../types/task";
import { TaskCard } from "./Tasks/TasksCard";

export const UpcomingTasks = ({ tasks }: { tasks: Task[] }) => {

  const today = new Date();
  today.setHours(0,0,0,0);

  const upcoming = tasks
    .filter(t => !t.completed && new Date(t.date) >= today)
    .slice(0, 4);

  return (
    <div className="space-y-4 mt-4">

      <h2 className="text-lg px-2 text-gray-200 font-semibold">
        Upcoming Tasks
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5">

        {upcoming.length > 0 ? (
          upcoming.map(task => (
            <TaskCard key={task.id} task={task} />
          ))
        ) : (
          <p className="text-gray-400 text-sm px-2">
            No upcoming tasks
          </p>
        )}

      </div>

    </div>
  );
};

export default UpcomingTasks;