import '@pages/todo/styles/_Tasks.scss';
import useTasksStore from "@store/useTasksStore";
import useGetTasks from "@hooks/useGetTasks";
import {useNavigate} from 'react-router-dom';

const TaskItem = () => {
  const {setTasks, setTaskStatus, removeTask, tasks} = useTasksStore();
  const navigate = useNavigate();
  useGetTasks({setTasks})


  return (
    <div className='tasks__container'>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <div
            key={task.id}
            className={ task.completed ? 'tasks__items-wrapper-completed' : 'tasks__items-wrapper'}
          >
            <div
              className='tasks__item'>
              <input
                checked={task.completed}
                onChange={() => setTaskStatus(task.id, !task.completed)}
                type="checkbox"/>
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
