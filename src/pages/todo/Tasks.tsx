import "./styles/_Tasks.scss";
import { useNavigate } from "react-router-dom";
import useTasksStore from "@store/useTasksStore";

const Tasks = () => {
  const tasks = useTasksStore((state) => state.tasks);
  const navigate = useNavigate();
  return (
    <div className={"tasks__wrapper"}>
      <div className={"tasks__container"}>
        <h1>Tasks</h1>
        {tasks.length > 0 ? (
          tasks.map((task) => {
            return (
              <div key={task.id}>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
              </div>
            )
          })
        ) : (
          <div className={"tasks__list"}>
            <h2>
              You dont have any tasks yet!
            </h2>
            <button onClick={() => navigate('/add')}>Add task</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tasks;