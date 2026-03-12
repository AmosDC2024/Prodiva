interface Props {
  openModal: () => void
}

export default function PlannerHeader({ openModal }: Props) {

  return (
    <div className="flex justify-between items-center mb-8">

      <div>
        <h1 className="text-4xl font-semibold">Planner</h1>
        <p className="text-gray-400">
          Plan and organize your day
        </p>
      </div>

      <button
        onClick={openModal}
        className="bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-500"
      >
        + Add Task
      </button>

    </div>
  )
}