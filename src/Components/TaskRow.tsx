import type { Task } from "../types/task"

interface Props {
  task: Task
  toggleComplete: (id: string) => void
  onEdit: (task: Task) => void
  isCompleted?: boolean
}

export default function TaskRow({
  task,
  toggleComplete,
  onEdit,
  isCompleted
}: Props) {

  return (
    <div className={`flex justify-between items-center p-3 rounded-xl border border-white/10 ${isCompleted ? "bg-white/5 opacity-60" : "bg-white/5"}`}>

      <div>
        <p className="text-sm font-medium">{task.title}</p>
        <p className="text-xs text-gray-400">
          {task.startTime} • {task.duration} min
        </p>
      </div>

      <div className="flex items-center gap-2">

        {/* BLUE DOT */}
        {!isCompleted && (
          <span className="w-2 h-2 rounded-full bg-blue-400" />
        )}

        {!isCompleted && (
          <button
            onClick={() => toggleComplete(task.id)}
            className="text-xs bg-green-600 px-2 py-1 rounded"
          >
            Done
          </button>
        )}

        <button
          onClick={() => onEdit(task)}
          className="text-xs bg-white/10 px-2 py-1 rounded"
        >
          Edit
        </button>

      </div>

    </div>
  )
}