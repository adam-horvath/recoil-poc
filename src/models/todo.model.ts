export interface Todo {
  id?: number;
  status: TodoStatus;
  title: string;
  due_on: string;
  user_id?: number;
}

export enum TodoStatus {
  Completed = 'completed',
  Pending = 'pending',
}
