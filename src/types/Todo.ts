export type TaskFormData = {
  title: string;
  tag: string;
}

export type Task = TaskFormData & {
  id: string;
  completed: boolean;
}