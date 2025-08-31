import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import useTasksStore from "@store/useTasksStore";
import useSortStore from "@store/useSortStore";
import useGetTasks from "@hooks/useGetTasks";
import components from "@components/components";
import "./styles/_Tasks.scss";

const Tasks = () => {
  const { tasks, setTasks } = useTasksStore();
  const { sortMethod } = useSortStore();
  const navigate = useNavigate();

  useGetTasks({ setTasks });

  const sortedTasks = useMemo(() => {
    if (sortMethod === "all") return tasks;
    if (sortMethod === "active") return tasks.filter((t) => !t.completed);
    if (sortMethod === "completed") return tasks.filter((t) => t.completed);
    return tasks;
  }, [tasks, sortMethod]);

  return (
    <div className="tasks__wrapper">
      <div className={"tasks__container"}>
        <article className={"tasks__h1-container"}>
          <h1>My tasks</h1>
        </article>

        <components.SortTasks />

        {sortedTasks.length > 0 ? (
          sortedTasks.map((task) => (
            <components.TaskItem
             key={task.id} task={task} />
          ))
        ) : (
          <div className="tasks__list">
            <h2>You don't have any tasks yet!</h2>
          </div>
        )}

        <button className="second__button" onClick={() => navigate("/add")}>
          Add task
        </button>
      </div>
    </div>
  );
};

export default Tasks;
