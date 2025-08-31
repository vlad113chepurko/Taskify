import "./styles/_Tasks.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import type { TaskFormData, Task } from "../../types/Todo";
import TagList from "@components/tags/TagList";
import useModalStore from "@store/useModalStore";
import ModalWindow from "@components/ModalWindow";
import useTasksStore from "@store/useTasksStore";
import * as yup from "yup";
import { useEffect, useState } from "react";

const scheme = yup.object({
  title: yup.string().required("Title is required"),
  tag: yup.string().required("Tag name is required"),
});

const NewTask = () => {
  const { setTasks, tasks } = useTasksStore();
  const [selectedTagId, setSelectedTagId] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<TaskFormData>({
    resolver: yupResolver(scheme),
  });

  const navigate = useNavigate();

  const { setModal, visible } = useModalStore();

  useEffect(() => {
    setModal("", false);
  }, []);

  useEffect(() => {
    if (selectedTagId) {
      setValue("tag", selectedTagId);
    }
  }, [selectedTagId]);

  useEffect(() => {
    document.title = "Add New Task - Taskify";
  }, []);

  const onSubmit = (data: TaskFormData) => {
    const newTask: Task = {
      ...data,
      id: nanoid(),
      completed: false,
    };

    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    setModal("", false);
    setModal("New to-do was added!", true);
  };

  return (
    <div className="tasks__wrapper">
      <form onSubmit={handleSubmit(onSubmit)} className="tasks__form">
        <h1>New Task</h1>

        <section className="tasks__form-section">
          <label className={errors && "error__label"} htmlFor="title">
            {errors.title?.message || "Enter task"}
          </label>
          <input
            id="title"
            className={errors.title && "error__input"}
            {...register("title")}
          />

          <label className={errors && "error__label"} htmlFor="tags">
            {errors.tag?.message || "Select tag"}
          </label>
          <TagList onTagSelect={setSelectedTagId} />
        </section>

        <div className="tasks__form-buttons">
          <button className="second__button" type="submit">
            Add task
          </button>
          <button
            onClick={() => navigate("/tags")}
            className="second__button"
            type="button"
          >
            Create tags
          </button>
        </div>

        {visible && <ModalWindow />}
      </form>
    </div>
  );
};

export default NewTask;
