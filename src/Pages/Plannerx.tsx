import { useState, useEffect } from "react"
import TaskList from "../Components/TaskList"
import AddTaskModal from "../Components/AddTaskModal"
import DateNavigator from "../Components/ActiveDate"
import type { Task } from "../types/task" 
import { useTasks } from "../utils/useTasks"

export default function Planner() { 


  const formatDate = (date: Date) => {
    const y = date.getFullYear()
    const m = String(date.getMonth() + 1).padStart(2, "0")
    const d = String(date.getDate()).padStart(2, "0")
    return `${y}-${m}-${d}`
  }

  const [activeDate, setActiveDate] = useState(new Date())
  const activeDateString = formatDate(activeDate)

  const prevDay = new Date(activeDate)
  prevDay.setDate(prevDay.getDate() - 1)
  const prevDayString = formatDate(prevDay)

   const { tasks, setTasks } = useTasks()

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks]) 

 

  const [open, setOpen] = useState(false)
  const [editingTask, setEditingTask] = useState<Task | null>(null)

  const handleCreateTask = (task: Task) => {
    setTasks(prev => {
      const exists = prev.find(t => t.id === task.id)
      return exists
        ? prev.map(t => (t.id === task.id ? task : t))
        : [...prev, task]
    })

    setOpen(false)
    setEditingTask(null)
  }

  const toggleComplete = (id: string) => {
    setTasks(prev =>
      prev.map(t =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    )
  }

  const handleEdit = (task: Task) => {
    setEditingTask(task)
    setOpen(true)
  }

  const activeTasks = tasks.filter(
    t => t.date === activeDateString && !t.completed
  )

  const completedTasks = tasks.filter(
    t => t.date === activeDateString && t.completed
  )

  const spilledTasks = tasks.filter(
    t => !t.completed && t.date === prevDayString
  )

  const moveToToday = () => {
    setTasks(prev =>
      prev.map(t =>
        t.date === prevDayString && !t.completed
          ? { ...t, date: activeDateString }
          : t
      )
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-black p-4 sm:p-6 space-y-6 text-white">

      <DateNavigator
        activeDate={activeDate}
        setActiveDate={setActiveDate}
      />

      <div className="flex justify-between items-center">
        <h1 className="text-xl sm:text-2xl font-bold">Planner</h1>

        <button
          onClick={() => {
            setEditingTask(null)
            setOpen(true)
          }}
          className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg text-sm"
        >
          + Add Task
        </button>
      </div>

      <TaskList
        activeTasks={activeTasks}
        completedTasks={completedTasks}
        toggleComplete={toggleComplete}
        onEdit={handleEdit}
      />

      {spilledTasks.length > 0 && (
        <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex justify-between items-center">

          <div>
            <p className="text-sm text-gray-300">
              {spilledTasks.length} unfinished tasks
            </p>

            <div className="text-xs text-gray-400 mt-2">
              {spilledTasks.map(t => (
                <div key={t.id}>
                  {t.startTime} {t.title}
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={moveToToday}
            className="bg-blue-600 px-3 py-1 rounded-md text-sm"
          >
            Move
          </button>

        </div>
      )}

      <AddTaskModal
        isOpen={open}
        onClose={() => {
          setOpen(false)
          setEditingTask(null)
        }}
        onCreate={handleCreateTask}
        editingTask={editingTask}
        activeDate={activeDateString}
      />

    </div>
  )
}