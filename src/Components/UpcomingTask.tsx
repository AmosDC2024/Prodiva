import { TaskCard } from "./Tasks/TasksCard"

export const UpcomingTasks = () => {

  return (

    <div className="space-y-6">

      <h2 className="text-lg text-gray-200 font-semibold">
        Upcoming Tasks
      </h2>

      <div className="grid grid-cols-2 gap-6">

        <TaskCard />
        <TaskCard />

      </div>

    </div>

  )
} 

export default UpcomingTasks;