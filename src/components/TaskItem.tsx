import images from './navigation/assets/index';
import useTasksStore from "@store/useTasksStore";
import useTagsStore from "@store/useTagsStore";
import useThemeStore from "@store/useThemeStore";
import type { Task } from '../types/Todo';

import tagLight from '@assets/tag-light.png';
import tagDark from '@assets/tag-black.png';

import { motion } from "motion/react";

type TaskItemProps = {
  task: Task;
};

const TaskItem = ({ task }: TaskItemProps) => {
  const { setTaskStatus, removeTask } = useTasksStore();
  const { tags } = useTagsStore();
  const { theme } = useThemeStore();

  const tagName = tags.find((t) => t.id === task.tag)?.name || "No tag";

  return (
    <motion.div
      animate={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.6 }}
      className="tasks__items-wrapper"
    >
      <div className="tasks__item">
        <input
          checked={task.completed}
          onChange={() => setTaskStatus(task.id, !task.completed)}
          type="checkbox"
        />
        <div className="tasks__item-container">
          <h3 className={task.completed ? "h3__completed" : ""}>
            {task.title}
          </h3>
          <article className="tasks__item-container-article">
            <div className="tasks__item-container-article">
              <img
                width={15}
                height={15}
                src={theme === "light" ? tagDark : tagLight}
                alt="tag"
              />
              <p>- {tagName}</p>
            </div>
          </article>
        </div>
      </div>

      <button className="remove__button" onClick={() => removeTask(task.id)}>
        <img
          width={25}
          height={25}
          src={theme === "light" ? images.remDark : images.remWhite}
          alt={`rem-${theme}`}
        />
      </button>
    </motion.div>
  );
};

export default TaskItem;
