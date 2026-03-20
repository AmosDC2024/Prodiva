import SearchBar from "../Components/SearchBar";
import ActiveTask from "../Components/ActiveTask"; 
import TodaysFocus from "../Components/TodaysFocus"; 
import DesktopTodaysFocus from "../Components/DesktopFocus";
import Badges from "../Components/Badges"; 
import UpcomingTasks from "../Components/UpcomingTask";  

import { useTasks } from "../utils/useTasks";

const Dashboard = () => {
  const { tasks } = useTasks();

  const total = tasks.length;

  const completed = tasks.filter(t => t.completed).length;

  const pending = tasks.filter(t => !t.completed).length;

  const overdue = tasks.filter(t => {
    const today = new Date();
    today.setHours(0,0,0,0);
    return !t.completed && new Date(t.date) < today;
  }).length;

  return (
    <div className="px-3 sm:px-4 md:px-6 max-w-[1200px] mx-auto">
      <div className="w-full min-h-screen bg-[#0B1120]">

        <SearchBar />

        <ActiveTask tasks={tasks} />

        <TodaysFocus 
          total={total}
          completed={completed}
          pending={pending}
        />

        <div className="sm:hidden">
          <Badges tasks={tasks} />
        </div>

        <div className="hidden sm:flex flex-col md:flex-row gap-4 justify-between">
          <DesktopTodaysFocus 
            total={total}
            completed={completed}
            pending={pending}
            overdue={overdue}
          />
          <Badges tasks={tasks} />
        </div>

        <UpcomingTasks tasks={tasks} />

      </div>
    </div>
  );
};

export default Dashboard;