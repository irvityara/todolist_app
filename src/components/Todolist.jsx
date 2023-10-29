import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Todolist() {
    const [newTodo, setNewTodo] = useState('');
    const [editingTodo, setEditingTodo] = useState(null);
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    return (
        <div style={{display:"flex", alignItems:"center"}}>
            <div>
                <ul>
                    {todos.map((todo) => (
                        <li key={todo.id}></li>
                    ))}
                </ul>
            </div>
            <div >
                <button>Edit</button>
                <button>X</button>
                </div>
        </div>
    )
}

export default Todolist