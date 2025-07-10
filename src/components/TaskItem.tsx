import '@pages/todo/styles/_Tasks.scss';
import { useEffect } from 'react';
import useTasksStore from "@store/useTasksStore";
import { useNavigate } from 'react-router-dom';

const TaskItem = () => {
  const { setTasks, removeTask, tasks } = useTasksStore();
  const navigate = useNavigate();

  useEffect(() => {
    const tasksFromStorage = localStorage.getItem("tasks");

    if (tasksFromStorage) {
      const parsedTasks = JSON.parse(tasksFromStorage);
      setTasks(parsedTasks);
    }
  }, []);


  return (
    <div className='tasks__container'>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <div
            key={task.id}
            className='tasks__items-wrapper'
          >
            <div className='tasks__item'>
              <input type="checkbox" />
              <h3>{task.title}</h3>
            </div>
            <button onClick={() => removeTask(task.id)}>Remove</button>
          </div>
        ))
      ) : (
        <div className='tasks__list'>
          <h2>You don't have any tasks yet!</h2>
        </div>
      )}
      <button onClick={() => navigate('/add')}>Add task</button>
    </div>
  );
};

export default TaskItem;
