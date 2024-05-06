import { ChangeEvent, FC, useState } from 'react';
import { Button } from 'react-bootstrap';

import { Todo, TodoStatus } from 'models/todo.model';

interface TodoItemCreatorProps {
  onAdd: (todo: Todo) => void;
}

export const TodoItemCreator: FC<TodoItemCreatorProps> = ({ onAdd }) => {
  const [title, setTitle] = useState<string>('');
  const [dueDate, setDueDate] = useState<string>('');

  const addItem = () => {
    onAdd({
      title,
      user_id: 6889124,
      due_on: new Date(dueDate).toISOString(),
      status: TodoStatus.Pending,
    });
    setTitle('');
    setDueDate('');
  };

  const onTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onDueDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDueDate(event.target.value);
  };

  return (
    <div className={'d-flex mb-5'}>
      <div className={'d-flex flex-column align-items-start'}>
        <span>Title</span>
        <input type={'text'} value={title} onChange={onTitleChange} className={'me-3'} style={{ height: 38 }} />
      </div>
      <div className={'d-flex flex-column align-items-start'}>
        <span>Due date</span>
        <input type={'text'} value={dueDate} onChange={onDueDateChange} className={'me-3'} style={{ height: 38 }} />
      </div>
      <div className={'d-flex align-items-end'}>
        <Button onClick={addItem}>Add</Button>
      </div>
    </div>
  );
};
