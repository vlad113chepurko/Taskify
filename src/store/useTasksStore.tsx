import { create } from 'zustand';

type Task = {
  name: string;
  id: string;
  description: string;
  completed: boolean;
};

interface TasksStore {
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
}

const useTasksStore = create<TasksStore>((set) => ({
  tasks: [],
  setTasks: (tasks) => set({ tasks }),
}));

export default useTasksStore;