export type TaskFormData = {
  title: string;
  description: string;
}

export type Task = TaskFormData & {
  id: string;
}