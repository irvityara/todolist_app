import { configureStore } from "@reduxjs/toolkit";
import TodoReducer  from "./reducers/TodoReducer";

const store = configureStore({
    reducer: {
        todo: todoReducer,
    },
})

export default store;