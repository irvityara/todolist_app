import React from "react";
import { useSelector } from "react-redux";

function Todolist() {
    const { todos } = useSelector(state => state.todo)

    return (
        <div style={{display:"flex", alignItems:"center"}}>
            (todos.map{(todo) => (
                <div key={todo.id} >
                    <div>{todo.value}</div>
                    <button>Edit</button>
                    <button>X</button>
                </div>
            )})
        </div>
    )
}

export default Todolist