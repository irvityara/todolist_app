import React from "react";

function Todolist() {
    return (
        <div style={{display:"flex", alignItems:"center"}}>
            (todos.map{(todo) => (
                <div key={todo.id} >
                    <span>{todo.value}</span>
                    <button>Edit</button>
                    <button>X</button>
                </div>
            )})
        </div>
    )
}

export default Todolist