import '@pages/todo/styles/_Tasks.scss';
import images from './navigation/assets/index';
import useTasksStore from "@store/useTasksStore";
import useGetTasks from "@hooks/useGetTasks";
import {useNavigate} from 'react-router-dom';
import { useMemo }  from "react";
import useSortStore from "@store/useSortStore";
import components from "@components/components";
import useThemeStore from "../store/useThemeStore";

const TaskItem = () => {
  const {setTasks, setTaskStatus, removeTask, tasks} = useTasksStore();
  const { theme } = useThemeStore();
  const { sortMethod } = useSortStore();
  const navigate = useNavigate();
  useGetTasks({setTasks})

  const sortedTasks = useMemo(() => {
    if (sortMethod === "all") {
      return tasks;
    } else if (sortMethod === "active") {
      return tasks.filter((task) => !task.completed);
    } else if (sortMethod === "completed") {
      return tasks.filter((task) => task.completed);
    }
    return tasks;
  }, [tasks, sortMethod]);


  return (
    <div className='tasks__container'>
      <components.SortTasks />
      {sortedTasks.length > 0 ? (
        sortedTasks.map((task) => (
          <div
            key={task.id}
            className={ 'tasks__items-wrapper' }
          >
            <div
              className='tasks__item'>
              {task.completed ? (
                <span className={"tasks__line"}></span>
              ) : null }

              <input
                checked={task.completed}
                onChange={() => setTaskStatus(task.id, !task.completed)}
                type="checkbox"/>
              <h3>{task.title}</h3>
            </div>
            <button className={"remove__button"} onClick={() => removeTask(task.id)}>
              <img
                width={25}
                height={25}
                src={theme === 'light' ? images.remDark : images.remWhite}
                alt={`rem-${theme}`}
              />
            </button>
          </div>
        ))
      ) : (
        <div className='tasks__list'>
          <h2>You don't have any tasks yet!</h2>
        </div>
      )}
      <button className={"second__button"} onClick={() => navigate('/add')}>Add task</button>
    </div>
  );
};

export default TaskItem;
