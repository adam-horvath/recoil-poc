import { atom, selector } from 'recoil';

import { Todo } from 'models/todo.model';

export const todoList = atom<Todo[]>({
  key: 'todoList',
  default: [],
});

export const todoSelector = selector({
  key: 'todoSelector',
  get: async ({ get }) => {
    return get(todoList);
  },
});
