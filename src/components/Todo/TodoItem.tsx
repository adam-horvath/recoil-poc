import { FC } from 'react';
import { Button } from 'react-bootstrap';

import { Todo } from 'models/todo.model';
import { formatDate } from 'utils/date';

interface TodoItemProps {
  todo: Todo;
  onDelete: (id: number) => void;
}

export const TodoItem: FC<TodoItemProps> = ({ onDelete, todo }) => {
  const { id, title, due_on, status } = todo;

  const deleteTodo = () => {
    onDelete(id ?? 0);
  };

  return (
    <div className={'row mb-3 justify-content-start align-items-start'} style={{ height: 50 }}>
      <div className={'pe-3 col-4'}>{title}</div>
      <div className={'pe-3 col-3'}>{formatDate({ date: new Date(due_on), handleTime: true })}</div>
      <div className={'pe-3 col-2'}>{status}</div>
      <div className={'text-center col-3 d-flex '}>
        <Button onClick={deleteTodo}>Delete</Button>
      </div>
    </div>
  );
};
