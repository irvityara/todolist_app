import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notes: [],
  filteredTodos: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodos: (state, action) => {
      const newTodo = {
        content: action.payload.text,
      };
      state.todos = [...state.todos, newTodo];
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo === action.payload.id);
    },
    searchTodo: (state, action) => {
      state.filteredTodos = state.todos.filter((todo) =>
        todo.content.startsWith(action.payload.search)
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addtodos, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;