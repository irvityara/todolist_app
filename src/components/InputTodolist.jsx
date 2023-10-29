import React from "react";
import Todolist from "./todolist";

const InputTodo = () => {
    return (
        <div>
            <input type="text" />
            <button>Submit</button>

            <Todolist />
        </div>
    );
};

export default InputTodo;