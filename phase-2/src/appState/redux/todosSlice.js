import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
    getTodos as apiGetTodos,
    addTodo as apiAddTodo,
    updateTodo as apiUpdateTodo,
    deleteTodo as apiDeleteTodo,
} from '../../api/todosApi';


export const loadTodos = createAsyncThunk('todos/load', async (thunkApi) => {
    try {
        const data = await apiGetTodos();
        return data;
    }
    catch (error) {
        thunkApi.rejectWithValue(error);
    }
})
export const addTodo = createAsyncThunk('todos/addTodo', async (todo, thunkApi) => {
    try {
        const addedTodo = await apiAddTodo(todo);
        return addedTodo;
    }
    catch (error) {
        thunkApi.rejectWithValue(error);
    }
});
export const updateTodo = createAsyncThunk('todos/updateTodo', async (todo, thunkApi) => {
    try {
        const result = await apiUpdateTodo(todo);
        return result;
    }
    catch (error) {
        thunkApi.rejectWithValue(error);
    }
});
export const deleteTodo = createAsyncThunk('todos/deleteTodo', async (todo, thunkApi) => {
    try {
        await apiDeleteTodo(todo);
        return todo.id;
    }
    catch (error) {
        thunkApi.rejectWithValue(error);
    }
});

export const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        isLoading: false,
        isError: false,
        error: null,
        todos: [],
    },
    extraReducers: {
        [loadTodos.pending]: (state) => {
            state.isLoading = true;
        },
        [loadTodos.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.error = null;
            state.todos = action.payload.sort((a, b) => b.id - a.id);
        },
        [loadTodos.rejected]: (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.error = action.payload;
        },

        [addTodo.pending]: (state) => {
            state.isLoading = true;
        },
        [addTodo.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.todos = [action.payload, ...state.todos];
        },
        [addTodo.rejected]: (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.error = action.payload;
        },

        [updateTodo.pending]: (state) => {
            state.isLoading = true;
        },
        [updateTodo.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.todos = state.todos.map(td => {
                if (td.id === action.payload.id) return action.payload;
                else return td;
            });
        },
        [updateTodo.rejected]: (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.error = action.payload;
        },

        [deleteTodo.pending]: (state) => {
            state.isLoading = true;
        },
        [deleteTodo.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.todos = state.todos.filter(td => td.id !== action.payload);
        },
        [deleteTodo.rejected]: (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.error = action.payload;
        },
    }
})

export const selectTodos = (state) => state.todos;

export default todosSlice.reducer;
