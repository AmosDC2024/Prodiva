import { createContext, useContext, useState, useEffect } from "react"
import type { Task } from "../types/task"
import { getTasks, saveTasks } from "../utils/TaskStorage"

type TaskContextType = {
  tasks: Task[]
  addTask: (task: Task) => void
  toggleTask: (id: string) => void
  deleteTask: (id: string) => void
}

const TaskContext = createContext<TaskContextType | null>(null)

export const TaskProvider = ({ children }: { children: React.ReactNode }) => {

  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    setTasks(getTasks())
  }, [])

  useEffect(() => {
    saveTasks(tasks)
  }, [tasks])

  const addTask = (task: Task) => {
    setTasks(prev => [...prev, task])
  }

  const toggleTask = (id: string) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  const deleteTask = (id: string) => {
    setTasks(prev => prev.filter(task => task.id !== id))
  }

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  )
}

export const useTasks = () => {

  const context = useContext(TaskContext)

  if (!context) {
    throw new Error("useTasks must be used within TaskProvider")
  }

  return context
}