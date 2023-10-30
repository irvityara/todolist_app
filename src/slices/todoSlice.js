import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        filteredTodos: [],
        todos: [],
    },
    reducers: {
        addTodos: (state, action) => {
            const newTodo = {
                todo: action.payload.text,
            };
            state.todos = [...state.todos, newTodo];
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo === action.payload.id);
        },
        searchTodos: (state, action) => {
            state.filteredTodos = state.todos.filter((todo) =>
              todo.content.startsWith(action.payload.search)
            );
          },
    }
})

export const { addTodos, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;