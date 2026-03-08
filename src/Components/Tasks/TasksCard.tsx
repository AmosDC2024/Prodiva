import  TaskItem from "../Tasks/TasksItem"

export const TaskCard = () => {

  const tasks = [

    { time: "9:00 AM", title: "Deep Work Session for Research" },
    { time: "10:30 AM", title: "Team Meeting", done: true },
    { time: "1:00 PM", title: "Lunch Break", done: true },
    { time: "2:00 PM", title: "Client Call" }

  ]

  return (

    <div className="p-6 rounded-2xl bg-[#0B1120] border border-white/10 shadow-[0_0_20px_rgba(59,130,246,.1)]">

      <div className="space-y-2">

        {tasks.map((task, i) => (

          <TaskItem
            key={i}
            time={task.time}
            title={task.title}
            done={task.done}
          />

        ))}

      </div>

    </div>

  )
}; 
export default TaskCard;