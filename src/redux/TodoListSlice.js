import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk for fetching todos (example API endpoint)
export const fetchTodos = createAsyncThunk(
    'items/fetchTodos',
    async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
        const data = await response.json();
        return data;
    }
);

const TodoListSlice = createSlice({
    name: 'items',
    initialState: {
        items: [],        // renamed from `data` to `items` for clarity
        status: 'idle',   // 'idle' | 'loading' | 'succeeded' | 'failed'
        error: null
    },
    reducers: {
        toggleItem: (state, action) => {
            const item = state.items.find(todo => todo.id === action.payload);
            if (item) {
                item.completed = !item.completed;
            }
        },

        addItem: (state, action) => {
            state.items.unshift({ id: Date.now(), text: action.payload, completed: false });
        },

        removeItem: (state, action) => {
            state.items = state.items.filter(todo => todo.id !== action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload.map(todo => ({
                    id: todo.id,
                    text: todo.title
                }));
            })
            .addCase(fetchTodos.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export const { addItem, removeItem, toggleItem } = TodoListSlice.actions;
export default TodoListSlice.reducer;
