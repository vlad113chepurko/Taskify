import { create } from 'zustand';
import type { Task } from '../types/Todo';

interface TasksStore {
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
  removeTask: (id: string) => void;
}

const useTasksStore =
  create<TasksStore>((set, get) => ({
  tasks: [],
  setTasks: (tasks) => set({ tasks }),
  removeTask: (id: string) => {
   const filterTasks = get().tasks.filter((task) => task.id !== id);
   set({tasks: filterTasks});
   localStorage.setItem('tasks', JSON.stringify(filterTasks));
  },
}));

export default useTasksStore;