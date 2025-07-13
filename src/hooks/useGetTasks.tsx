import { useEffect } from 'react';
import type {Task} from '../types/Todo';

type UseGetTasksProps = {
  setTasks: (tasks: Task[]) => void;
};

const useGetTasks = ({ setTasks }: UseGetTasksProps) => {
  useEffect(() => {
    const tasksFromStorage = localStorage.getItem("tasks");

    if (tasksFromStorage) {
      const parsedTasks: Task[] = JSON.parse(tasksFromStorage);
      setTasks(parsedTasks);
    }
  }, [setTasks]);
};

export default useGetTasks;
