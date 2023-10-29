import { configureStore } from "@reduxjs/toolkit";
import TodoReducer  from "./reducers/todo-reducer";

const store = configureStore({
    reducer: {
        todo: todoReducer,
    }
})

export default store;

