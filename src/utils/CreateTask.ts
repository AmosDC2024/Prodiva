import type {Task,TaskCategory} from '../types/task'

export function createTask(
  title: string,
  category: TaskCategory,
  startTime: string,
  duration: number,
  notes?: string
): Task {
  return {
    id: crypto.randomUUID(),
    title,
    category,
    startTime,
    duration,
    notes,
    completed: false,
    date: new Date().toISOString().split("T")[0],
    createdAt: new Date().toISOString(),
  };
} 

export default createTask
