import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  filteredTodos: [],
};
const filteredTodos = filter === 'ALL' ? state.todos :
    filter === 'ACTIVE' ? state.todos.filter((todo) => !todo.completed) :
        filter === 'COMPLETE' ? state.todos.filter((todo) => todo.completed) :
            state.todos;

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
    editTodo:(state, action) => {
        const newTodo = {
          content: action.payload.text,
        };
        state.todos = [...state.todos, newTodo];
      },
    searchTodo: (state, action) => {
      state.filteredTodos = state.todos.filter((todo) =>
        todo.content.startsWith(action.payload.search)
      );
    },
  },
});


// Action creators are generated for each case reducer function
export const { addTodos, removeTodo, editTodo, searchTodo } = todoSlice.actions;

export default todoSlice.reducer;