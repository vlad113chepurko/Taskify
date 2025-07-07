import "./styles/_Tasks.scss";
import { useNavigate } from "react-router-dom";
import useTasksStore from "@store/useTasksStore";

const Tasks = () => {
  const tasks = useTasksStore((state) => state.tasks);
  const navigate = useNavigate();
  return (
    <div>
      <h1>Tasks</h1>
      {tasks.length > 1 ? (
        tasks.map((task, index) => {
            return (
              <div key={index}>
                <h3>{task.name}</h3>
                <p>{task.description}</p>
              </div>
            )
          })
      ) : (
        <h2>
          You dont have any tasks yet!
          Add a new task
          <button onClick={() => navigate('/add')}>Add task</button>
        </h2>
      )}
    </div>
  );
};

export default Tasks;