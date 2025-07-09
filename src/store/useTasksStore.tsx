import { create } from 'zustand';
import type { Task } from '../types/Todo';

interface TasksStore {
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
}

const useTasksStore =
  create<TasksStore>((set) => ({
  tasks: [],
  setTasks: (tasks) => set({ tasks }),
}));

export default useTasksStore;