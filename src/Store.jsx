// app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import TodoListReducer from './TodoListSlice';

export const store = configureStore({
  reducer: {
    items: TodoListReducer,
  },
});

