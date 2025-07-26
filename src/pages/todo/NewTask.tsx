import './styles/_Tasks.scss';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {nanoid} from 'nanoid';
import { useNavigate } from 'react-router-dom';
import type { TaskFormData } from "../../types/Todo";
import type { Task } from "../../types/Todo";
import useModalStore from "@store/useModalStore";
import ModalWindow from "@components/ModalWindow";
import useTasksStore from "@store/useTasksStore";
import * as yup from 'yup';
import {useEffect} from "react";

const scheme = yup.object({
  title: yup.string().required("Title is required"),
})

const NewTask = () => {
  const { setTasks, tasks  } = useTasksStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TaskFormData>({
    resolver: yupResolver(scheme),
  })

  const navigate = useNavigate();

  const { setModal, visible }  = useModalStore();

  useEffect (() => {
    setModal("", false);
  }, [])

  const onSubmit = (data: TaskFormData) => {
    const newTask: Task = {
      ...data,
      id: nanoid(),
      completed: false,
    };

    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));

    setModal("New to-do was added!", true);
    navigate("/tasks");
  };


  return (
    <div className="tasks__wrapper">
      <form onSubmit={handleSubmit(onSubmit)} className={"tasks__form"}>
        <h1>
          New Task
        </h1>
        <section className={"tasks__form-section"}>
          <label htmlFor="title">{errors.title?.message || "Enter task"}</label>
          <input
            id="title"
            className={errors.title && 'error__input'}
            {...register('title')} />
          <label htmlFor="tags">Select tags</label>
        </section>
        <div className={"tasks__form-buttons"}>
          <button className={"second__button"} type="submit">Add task</button>
          <button className={"second__button"}>Create tags</button>
        </div>
        {visible && (
          <ModalWindow />
        )}
      </form>
    </div>
  );
};

export default NewTask;