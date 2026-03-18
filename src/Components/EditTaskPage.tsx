import { useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { nanoid } from "nanoid"

import type { Task, TaskCategory } from "../types/task"
import { useLocalStorage } from "../utils/localStorage"

export default function AddTaskPage() {

  const navigate = useNavigate()
  const { taskId } = useParams()

  const [tasks, setTasks] = useLocalStorage<Task[]>("tasks", [])

  const task = tasks.find((t) => t.id === taskId)

  const [name, setName] = useState("")
  const [category, setCategory] = useState<TaskCategory | "">("")
  const [startTime, setStartTime] = useState("")
  const [duration, setDuration] = useState<number | "">("")
  const [notes, setNotes] = useState("")

  useEffect(() => {
    if (task) {
      setName(task.title)
      setCategory(task.category)
      setStartTime(task.startTime)
      setDuration(task.duration)
      setNotes(task.notes ?? "")
    }
  }, [task])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault()

    if (!name || !category || !startTime || duration === "") {
      alert("Please fill all required fields")
      return
    }

    const newTask: Task = {
      id: task?.id || nanoid(),
      title: name,
      category: category as TaskCategory,
      startTime,
      duration: Number(duration) || 0,
      notes,
      date: task?.date || new Date().toISOString().split("T")[0],
      completed: task?.completed || false,
      createdAt: task?.createdAt || new Date().toISOString()
    }

    if (task) {

      const updated = tasks.map((t) =>
        t.id === task.id ? newTask : t
      )

      setTasks(updated)

    } else {

      setTasks([...tasks, newTask])

    }

    navigate("/planner")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#020617] text-white">

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-[#0B1120] p-8 rounded-xl border border-white/10 space-y-4"
      >

        <h1 className="text-xl font-semibold">
          {task ? "Edit Task" : "Add Task"}
        </h1>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Task Name"
          className="w-full bg-black/40 p-3 rounded-lg"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value as TaskCategory)}
          className="w-full bg-black/40 p-3 rounded-lg"
        >
          <option value="">Select Category</option>
          <option value="focus">Focus</option>
          <option value="study">Study</option>
          <option value="meeting">Meeting</option>
        </select>

        <input
          type="time"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          className="w-full bg-black/40 p-3 rounded-lg [color-scheme:dark]"
        />

        <select
          value={duration}
          onChange={(e) => setDuration(Number(e.target.value))}
          className="w-full bg-black/40 p-3 rounded-lg"
        >
          <option value="">Select Duration</option>
          <option value="15">15 mins</option>
          <option value="30">30 mins</option>
          <option value="60">1 hour</option>
        </select>

        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Notes"
          className="w-full bg-black/40 p-3 rounded-lg"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 py-3 rounded-lg"
        >
          {task ? "Update Task" : "Create Task"}
        </button>

      </form>

    </div>
  )
}