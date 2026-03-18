import { useState } from "react"
import AddTaskModal from "../Components/AddTaskModal"  
import type { Task } from "../types/task"  

export default function Planner() {

  const [open, setOpen] = useState(false) 

    const handleCreateTask = (task: Task) => {
    console.log("New task:", task)
  }


  return (

    <div>

      <button
        onClick={() => setOpen(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Add Task
      </button>

      <AddTaskModal
        isOpen={open}
        onClose={() => setOpen(false)} 
        onCreate={handleCreateTask}
      />

    </div>
  )
} 

