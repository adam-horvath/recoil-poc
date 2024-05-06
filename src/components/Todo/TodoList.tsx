import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { Todo } from 'models/todo.model';
import { todoList } from 'recoilState/todo';
import { todoService } from 'services/todo.service';

import { TodoItem } from './TodoItem';
import { TodoItemCreator } from './TodoItemCreator';

export const TodoList = () => {
  const [todos, setTodos] = useRecoilState<Todo[]>(todoList);

  useEffect(() => {
    const fetchTodos = async () => {
      const fetchedTodos = await todoService.getTodos();
      setTodos(fetchedTodos);
    };

    fetchTodos();
  }, []);

  const addItem = async (todo: Todo) => {
    const newTodo = await todoService.postTodo(todo);
    setTodos([newTodo, ...todos]);
  };

  const deleteItem = async (deletedId: number) => {
    await todoService.deleteTodo(deletedId);
    setTodos(todos.filter(({ id }) => id !== deletedId));
  };

  return (
    <>
      <TodoItemCreator onAdd={addItem} />

      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onDelete={deleteItem} />
      ))}
    </>
  );
};
