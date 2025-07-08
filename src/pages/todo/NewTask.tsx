import './styles/_Tasks.scss';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {nanoid} from 'nanoid';
import type { TaskFormData } from "../../types/Todo";
import * as yup from 'yup';

const scheme = yup.object({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
})
const NewTask = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(scheme),
  })

  const onSubmit = (data: TaskFormData) => {
    const newTask = {
      ...data,
      id: nanoid(),
    }
    console.log(newTask)
  }

  return (
    <div className="tasks__wrapper">
      <form onSubmit={handleSubmit(onSubmit)} className={"tasks__form"}>
        <h1>
          New Task
        </h1>
        <section className={"tasks__form-section"}>
          <label htmlFor="title">{errors.title?.message || "Enter title"}</label>
          <input
            id="title"
            className={errors.title && 'error__input'}
            {...register('title')} />
        </section>
        <section className={"tasks__form-section"}>
          <label htmlFor="description">{errors.description?.message || "Enter description"}</label>
          <input
            id="description"
            className={errors.description && 'error__input'}
            {...register('description')} />
        </section>
        <button type="submit">Add task</button>
      </form>
    </div>
  );
};

export default NewTask;