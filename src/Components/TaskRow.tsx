import type { Task } from "../types/task"

interface Props {
  task: Task
  toggleComplete: (id: string) => void
}

export default function TaskRow({ task, toggleComplete }: Props) {

  return (

    <div className="flex items-center justify-between border border-white/10 bg-white/5 rounded-lg p-4">

      <div className="w-20 text-blue-400 font-semibold">
        {task.startTime}
      </div>

      <div className="flex-1">

        <h3 className={`font-medium ${task.completed && "line-through text-gray-400"}`}>
          {task.title}
        </h3>

        <p className="text-gray-400 text-sm">
          {task.category} • {task.duration} min
        </p>

      </div>

      <div className="flex items-center gap-4">

        <button
          onClick={() => toggleComplete(task.id)}
          className="text-sm text-gray-300 hover:text-white"
        >
          Mark Done
        </button>

        <span className="text-gray-400 text-sm">
          {task.duration} min
        </span>

        <div className="w-2 h-2 rounded-full bg-blue-400"></div>

      </div>

    </div>

  )
}