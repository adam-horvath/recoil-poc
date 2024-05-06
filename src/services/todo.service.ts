import { Todo } from 'models/todo.model';
import request, { Methods } from 'utils/request';

class TodoService {
  async getTodos() {
    return request<Todo[]>({
      resource: '/todos',
    });
  }

  async postTodo(todo: Todo) {
    return request<Todo>({
      method: Methods.POST,
      resource: '/todos',
      data: todo,
    });
  }

  async updateTodo(todo: Todo) {
    return request<Todo[]>({
      method: Methods.PATCH,
      resource: `/todos/${todo.id}`,
      data: todo,
    });
  }

  async deleteTodo(id: number) {
    return request<Todo[]>({
      method: Methods.DELETE,
      resource: `/todos/${id}`,
    });
  }
}

export const todoService = new TodoService();
