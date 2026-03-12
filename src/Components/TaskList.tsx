import { AnimatePresence, motion } from "framer-motion"
import TaskRow from "./TaskRow"
import type { Task } from "../types/task"

interface Props {
  tasks: Task[]
  toggleComplete: (id: string) => void
}

export default function TaskList({ tasks, toggleComplete }: Props) {

  return (

    <div className="space-y-3">

      <AnimatePresence>

        {tasks.map((task) => (

          <motion.div
            key={task.id}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.25 }}
          >

            <TaskRow
              task={task}
              toggleComplete={toggleComplete}
            />

          </motion.div>

        ))}

      </AnimatePresence>

    </div>

  )
}