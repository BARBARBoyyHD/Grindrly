export type Task = {
  id: string;
  user_id: string;
  title: string;
  progress: string;
  description: string;
  is_complete: boolean;
  due_date: Date;
  due_time:string
};

export type NewTask = Pick<Task,"user_id" | "title"|"progress"|"description"|"is_complete"| "due_date" |"due_time">
export type UpdateTask = Pick<Task,"id" | "user_id" | "title"|"progress"| "description"| "is_complete"| "due_date" |"due_time">
export type DeleteTask = Pick<Task,"id">