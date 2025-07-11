import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';



const TodoListSlice = createSlice({
  name: 'items',
 initialState: {
        data: null,
        status: 'idle',
        error: null
    },
  reducers: {
    addItem: (state, action) => {
      state.push({ id: Date.now(), 
        text: action.payload });
    },
    removeItem: (state, action) => {
      return state.filter(todo => todo.id !== action.payload);
    },
  },
  //  extraReducers: (builder) => {
  //       builder
  //           .addCase(fetchTodos.pending, (state) => {
  //               state.status = 'loading';
  //           })
  //           .addCase(fetchTodos.fulfilled, (state, action) => {
  //               state.status = 'succeeded';
  //               state.data = action.payload;
  //           })
  //           .addCase(fetchTodos.rejected, (state, action) => {
  //               state.status = 'failed';
  //               state.error = action.error.message;
  //           })
  //   }
});

export const { addItem, removeItem } = TodoListSlice.actions;
export default TodoListSlice.reducer;
