import { motion, AnimatePresence } from "framer-motion"
import { useForm } from "react-hook-form"
import { X } from "lucide-react"
import type { Task, TaskCategory } from "../types/task"
import categoryColors from "../constants/taskCategories"
import { useEffect } from "react"
import { getTodayDate } from "../utils/getTodayDate"

interface AddTaskModalProps {
  isOpen: boolean
  onClose: () => void
  onCreate: (task: Task) => void
  editingTask: Task | null
  activeDate: string
}

interface TaskFormData {
  name: string
  category: TaskCategory
  startTime: string
  duration: number
  notes?: string
}

export default function AddTaskModal({
  isOpen,
  onClose,
  onCreate,
  editingTask,
  activeDate
}: AddTaskModalProps) {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch
  } = useForm<TaskFormData>()

  const selectedCategory = watch("category")

  /* --------------------------
     PREFILL FORM WHEN EDITING
  ---------------------------*/

  useEffect(() => {

    if (editingTask) {
      setValue("name", editingTask.title)
      setValue("category", editingTask.category)
      setValue("startTime", editingTask.startTime)
      setValue("duration", editingTask.duration)
      setValue("notes", editingTask.notes || "")
    }

  }, [editingTask, setValue])



  /* --------------------------
      SUBMIT HANDLER
  ---------------------------*/

  const submit = (data: TaskFormData) => {

    const newTask: Task = {

      id: editingTask ? editingTask.id : crypto.randomUUID(),

      title: data.name,

      category: data.category,

      startTime: data.startTime,

      duration: Number(data.duration),

      notes: data.notes,

      completed: editingTask ? editingTask.completed : false,

      date: activeDate || getTodayDate(),

      createdAt: editingTask ? editingTask.createdAt : new Date().toISOString(),
    } 

       console.log("SUBMITTING TASK:", newTask)

    onCreate(newTask)

    reset()

    onClose() 

 
  }

  



  return (
    <AnimatePresence>

      {isOpen && (

        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="w-[620px] rounded-xl border border-white/10 bg-slate-900/80 backdrop-blur-lg p-8 shadow-2xl"
          >

            {/* HEADER */}

            <div className="flex justify-between items-start mb-6">

              <div>
                <h2 className="text-2xl font-semibold text-white">

                  {editingTask ? "Edit Task" : "New Task"}

                </h2>

                <p className="text-gray-400 text-sm">
                  {editingTask
                    ? "Update your task details"
                    : "Add a new task to your planner"}
                </p>
              </div>

              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white"
              >
                <X size={20} />
              </button>

            </div>


            <form onSubmit={handleSubmit(submit)} className="space-y-5">

              {/* TASK NAME */}

              <div>

                <label className="text-sm text-gray-300">
                  Task Name
                </label>

                <input
                  {...register("name", {
                    required: "Task name is required",
                  })}
                  placeholder="Enter task title"
                  className="w-full mt-1 px-3 py-2 rounded-md bg-slate-800 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {errors.name && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.name.message}
                  </p>
                )}

              </div>


              {/* CATEGORY + START TIME */}

              <div className="grid grid-cols-2 gap-4">

                <div>

                  <label className="text-sm text-gray-300">
                    Category
                  </label>

                  <div className="relative">

                    <select
                      {...register("category", {
                        required: "Select category",
                      })}
                      className="w-full mt-1 px-3 py-2 rounded-md bg-slate-800 border border-white/10 text-white"
                    >

                      <option value="">Select category</option>
                      <option value="focus">Focus</option>
                      <option value="work">Work</option>
                      <option value="meeting">Meeting</option>
                      <option value="break">Break</option>

                    </select>

                    {selectedCategory && (

                      <span
                        className={`absolute left-2 top-3 h-2 w-2 rounded-full ${categoryColors[selectedCategory]}`}
                      />

                    )}

                  </div>

                  {errors.category && (
                    <p className="text-red-400 text-xs mt-1">
                      {errors.category.message}
                    </p>
                  )}

                </div>


                {/* START TIME */}

                <div>

                  <label className="text-sm text-gray-300">
                    Start Time
                  </label>

                  <input
                    type="time"
                    {...register("startTime", {
                      required: "Start time required",
                    })}
                    className="w-full mt-1 px-3 py-2 rounded-md bg-slate-800 border border-white/10 text-white"
                  />

                  {errors.startTime && (
                    <p className="text-red-400 text-xs mt-1">
                      {errors.startTime.message}
                    </p>
                  )}

                </div>

              </div>


              {/* DURATION */}

              <div>

                <label className="text-sm text-gray-300">
                  Duration
                </label>

                <select
                  {...register("duration", {
                    required: "Select duration",
                    valueAsNumber: true,
                  })}
                  className="w-full mt-1 px-3 py-2 rounded-md bg-slate-800 border border-white/10 text-white"
                >

                  <option value="">Select duration</option>
                  <option value={15}>15 min</option>
                  <option value={30}>30 min</option>
                  <option value={60}>60 min</option>
                  <option value={90}>90 min</option>

                </select>

                {errors.duration && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.duration.message}
                  </p>
                )}

              </div>


              {/* NOTES */}

              <div>

                <label className="text-sm text-gray-300">
                  Notes (Optional)
                </label>

                <textarea
                  {...register("notes")}
                  rows={3}
                  placeholder="Optional notes..."
                  className="w-full mt-1 px-3 py-2 rounded-md bg-slate-800 border border-white/10 text-white"
                />

              </div>


              {/* FOOTER */}

              <div className="flex justify-end gap-3 pt-4">

                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-md border border-white/10 text-gray-300 hover:bg-white/5"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-500 text-white font-medium"
                >
                  {editingTask ? "Update Task" : "Create Task"}
                </button>

              </div>

            </form>

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>
  )
}