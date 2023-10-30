import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
    filter: "ALL",
    filteredTodos: [],
};


export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodos: (state, action) => {
      const newTodo = {
        id: Math.random() * 1000,
          content: action.payload.text,
        completed: false,
      };
      state.todos = [...state.todos, newTodo];
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo === action.payload.id);
    },
    editTodo: (state, action) => {
        const editTodo = {
          content: action.payload.text,
        };
        state.todos = [...state.todos, editTodo];
      },
    
      //completeTodo
    toggleComplete: (state, action) => {
          state.todos = state.todos.map((todo) => {
              if (todo.id === action.payload.id) {
                  return { ...todo, completed: !todo.completed };
              }
              return todo;
          });
        },
    
    searchTodo: (state, action) => {
        state.filter = action.payload.filter;
        if (state.filter === "ALL") {
            state.filteredTodos = state.todos;
        } else if (state.filter === "ACTIVE") {
            state.filteredTodos = state.todos.filter((todo) => !todo.completed );
        } else if (state.filter === "COMPLETE") {
            state.filteredTodos = state.todos.filter((todo) => todo.completed)
        }

      state.filteredTodos = state.todos.filter((todo) =>
        todo.content.startsWith(action.payload.search)
      );
    },
    
  },
});



// Action creators are generated for each case reducer function
export const { addTodos, removeTodo, editTodo, searchTodo, toggleComplete} = todoSlice.actions;

export default todoSlice.reducer;