import type{ Task } from "../types/task"

interface Props {
  tasks: Task[]
  moveToToday: () => void

  
}

export default function YesterdayTasks({ tasks, moveToToday }: Props) {

  if (tasks.length === 0) return null

  return (

    <div className="mt-8 border border-white/10 rounded-lg p-6 bg-white/5 flex justify-between items-center">

      <div>

        <p className="text-gray-300 mb-2">
          You have {tasks.length} unfinished tasks from yesterday
        </p>

        {tasks.map(task => (
          <p key={task.id} className="text-gray-400 text-sm">
            ✕ {task.startTime} {task.title}
          </p>
        ))}

      </div>

      <button className="bg-blue-600 px-4 py-2 rounded-lg">
        Move to Today
      </button>

    </div>

  )
}