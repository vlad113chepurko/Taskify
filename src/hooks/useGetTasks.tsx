import { useEffect } from 'react';

interface Task {
  id: string;
  title: string;
}

type UseGetTasksProps = {
  setTasks: (tasks: Task[]) => void;
};

const useGetTasks = ({ setTasks }: UseGetTasksProps): void => {
  useEffect(() => {
    const tasksFromStorage = localStorage.getItem("tasks");

    if (tasksFromStorage) {
      const parsedTasks: Task[] = JSON.parse(tasksFromStorage);
      setTasks(parsedTasks);
    }
  }, [setTasks]);
};

export default useGetTasks;
