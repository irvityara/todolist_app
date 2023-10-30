import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, getTodo } from "../redux/reducers/todo-reducer";


function Todolist() {
    const dispatch = useDispatch();
    const { isLoading, todos } = useSelector((state) => state.todo);
    const [input, setInput] = useState("")
    
    // console.log(isLoading, todos);

    useEffect(() => {
        dispatch(getTodo());
    }, []);

    const handleClick = (e) => {
        e.preventDefault()
        let newTodo = {
            value: input,
            status: false
        }
    
        dispatch(addTodo(newTodo))
    }

    return (
        <div>
            <div style={{ display: "grid", justifyContent: "center", alignItems: "center" }}>
            <div className="filterBox">
                <button className="filterButton">ALL</button>
                <button className="filterButton">ACTIVE</button>
                <button className="filterButton">COMPLETED</button>
            </div>
            <div className="listBox">
                <div className="checkBox">
                    <input type="checkbox" />
                </div>
                <div className="listTodo">
                    <span>
                        Buy Milk
                    </span>
                </div>
                <div>
                    <button>Edit</button>
                    <button>X</button>
                </div>
            </div>
            <div className="listBox">
                <div className="checkBox">
                    <input type="checkbox" />
                </div>
                    {isLoading ? (
                        <div>loading...</div>
                    ) : (
                        <div className="listTodo">
                        {todos.map((todo) => (
                            <div key={todo.id}>
                                <span>{todo.value}</span>
                                <button>Edit</button>
                                <button>x</button>
                            </div>
                        ))}
                    </div>   
                    )}
                </div>
            </div>
        </div>
    )
}

export default Todolist;