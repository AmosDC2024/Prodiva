import { useState } from "react"
import PlannerHeader from "../Components/PlannerHeader"
import AddTaskModal from "../Components/AddTaskModal"
import TaskList from "../Components/TaskList"
import YesterdayTasks from "../Components/YesterdaysTask"
import type { Task } from "../types/task"
import { useLocalStorage } from "../utils/localStorage"
import { getTodayDate } from "../utils/getTodayDate"

export default function Planner() {

  const today = getTodayDate()

  const [tasks, setTasks] = useLocalStorage<Task[]>("tasks", [])
  const [open, setOpen] = useState(false)

  const createTask = (task: Task) => {
    setTasks([...tasks, task])
  }

  const toggleComplete = (id: string) => {

    const updated = tasks.map((task) =>
      task.id === id
        ? { ...task, completed: !task.completed }
        : task
    )

    setTasks(updated)
  }

  const moveYesterdayTasks = () => {

    const updated = tasks.map(task => {

      if (task.date !== today && !task.completed) {
        return {
          ...task,
          date: today
        }
      }

      return task
    })

    setTasks(updated)
  }

  /* ---------- TASK GROUPING (FIXED) ---------- */

  const activeTodayTasks = tasks.filter(
    task => task.date === today && !task.completed
  )

  const completedTodayTasks = tasks.filter(
    task => task.date === today && task.completed
  )

  const yesterdayTasks = tasks.filter(
    task => task.date !== today && !task.completed
  )

  return (

    <div
      className="min-h-screen text-white p-10 bg-cover bg-center"
      style={{ backgroundImage: "url('/galaxy.png')" }}
    >

      <PlannerHeader openModal={() => setOpen(true)} />

      {/* ACTIVE TASKS */}

      <h2 className="text-gray-300 text-sm mb-4">
        Today's Tasks
      </h2>

      <TaskList
        tasks={activeTodayTasks}
        toggleComplete={toggleComplete}
      />

      {/* COMPLETED TASKS */}

      {completedTodayTasks.length > 0 && (
        <>
          <h2 className="text-gray-400 text-sm mt-8 mb-4">
            Completed Today
          </h2>

          <TaskList
            tasks={completedTodayTasks}
            toggleComplete={toggleComplete}
          />
        </>
      )}

      {/* YESTERDAY PANEL */}

      <YesterdayTasks
        tasks={yesterdayTasks}
        moveToToday={moveYesterdayTasks}
      />

      {/* MODAL */}

      <AddTaskModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onCreate={createTask}
      />

    </div>
  )
}