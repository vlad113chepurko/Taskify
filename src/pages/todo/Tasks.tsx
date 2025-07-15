import "./styles/_Tasks.scss";
import components from "@components/components";

const Tasks = () => {
  return (
    <div className={"tasks__wrapper"}>
     <components.TaskItem />
    </div>
  )
};

export default Tasks;