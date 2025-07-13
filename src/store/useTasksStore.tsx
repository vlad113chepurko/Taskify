import {create} from 'zustand';
import type {Task} from '../types/Todo';

interface TasksStore {
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
  setTaskStatus: (id: string, completed: boolean) => void;
  removeTask: (id: string) => void;
}

const useTasksStore =
  create<TasksStore>((set, get) => ({
    tasks: [],
    setTasks: (tasks) => set({tasks}),
    setTaskStatus: (id, completed) => {
      const updatedTasks = get().tasks.map((task) =>
        task.id === id ? {...task, completed} : task
      );
      set({tasks: updatedTasks});
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    },
    removeTask: (id: string) => {
      const filterTasks = get().tasks.filter((task) => task.id !== id);
      set({tasks: filterTasks});
      localStorage.setItem('tasks', JSON.stringify(filterTasks));
    },
  }));

export default useTasksStore;