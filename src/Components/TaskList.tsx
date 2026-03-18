import TaskRow from "./TaskRow"
import type { Task } from "../types/task"

interface Props {
  activeTasks: Task[]
  completedTasks: Task[]
  toggleComplete: (id: string) => void
  onEdit: (task: Task) => void
}

export default function TaskList({
  activeTasks,
  completedTasks,
  toggleComplete,
  onEdit
}: Props) {

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-4">

      {/* ACTIVE */}
      <div>
        <h2 className="text-sm text-gray-400 mb-2">Today's Tasks</h2>

        <div className="space-y-2">
          {activeTasks.map(task => (
            <TaskRow
              key={task.id}
              task={task}
              toggleComplete={toggleComplete}
              onEdit={onEdit}
            />
          ))}
        </div>
      </div>

      {/* DONE */}
      {completedTasks.length > 0 && (
        <div>
          <h2 className="text-sm text-gray-400 mt-4 mb-2">Done</h2>

          <div className="space-y-2">
            {completedTasks.map(task => (
              <TaskRow
                key={task.id}
                task={task}
                toggleComplete={toggleComplete}
                onEdit={onEdit}
                isCompleted
              />
            ))}
          </div>
        </div>
      )}

    </div>
  )
}