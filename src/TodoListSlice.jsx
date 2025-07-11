// features/items/TodoListSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Example async thunk
export const fetchItems = createAsyncThunk(
  'items/fetchItems', 
  async () => {
  const response = await fetch('/api/items');
  return await response.json();
});

const TodoListSlice = createSlice({
  name: 'items',
  initialState: {
    list: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.list.push(action.payload);
    },
    removeItem: (state, action) => {
      state.list = state.list.filter(item => item.id !== action.payload);
    },
    updateItem: (state, action) => {
      const index = state.list.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.list[index] = action.payload;
      }
    },
  },
});

export const { addItem, removeItem, updateItem } = TodoListSlice.actions;

export default TodoListSlice.reducer;
