import { atom, selector } from 'recoil';

import { Todo } from 'models/todo.model';

export const todoList = atom<Todo[]>({
  key: 'todoList',
  default: [],
});

export const todoListSize = selector({
  key: 'todoListSize',
  get: async ({ get }) => {
    return get(todoList).length;
  },
});
