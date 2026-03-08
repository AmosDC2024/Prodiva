interface TaskItemProps {
  time: string
  title: string
  done?: boolean
}

export const TaskItem = ({ time, title, done }: TaskItemProps) => {

  return (

    <div className="flex items-center justify-between py-3 border-b border-white/5">

      <div className="flex items-center gap-4">

        <span className="text-gray-400 text-sm">
          {time}
        </span>

        <span className="text-gray-200 text-sm">
          {title}
        </span>

      </div>

      {done ? (

        <span className="text-xs px-3 py-1 rounded-md bg-green-500/20 text-green-400">
          DONE ✓
        </span>

      ) : (

        <span className="w-2 h-2 rounded-full bg-blue-500"></span>

      )}

    </div>

  )
}; 

export default TaskItem;