import "./styles/_Tasks.scss";
import TaskItem from '@components/TaskItem';

const Tasks = () => {
  return (
    <div className={"tasks__wrapper"}>
     <TaskItem />
    </div>
  )
};

export default Tasks;