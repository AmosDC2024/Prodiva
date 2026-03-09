export type TaskCategory =
  | "Focus"
  | "Meeting"
  | "Work"
  | "Break"
  | "Personal"
  | "Study"
  | "Health";

export interface Task {
  id: string;
  title: string;
  category: TaskCategory;
  startTime: string;
  duration: number;
  notes?: string;
  completed: boolean;
  date: string;
  createdAt: string;
} 
