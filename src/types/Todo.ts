export type TaskFormData = {
  title: string;
}

export type Task = TaskFormData & {
  id: string;
  completed: boolean;
}