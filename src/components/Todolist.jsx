import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, editTodo, deleteTodo } from '../reducers/todoSlice';

const TodoList = () => {
  const [newTodo, setNewTodo] = useState('');
  const [editingTodo, setEditingTodo] = useState(null);
  const [filter, setFilter] = useState('ALL'); // State untuk filter
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

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
                    <div className="listTodo">
                        {todos.map((todo) => (
                            <div key={todo.id}>
                                <span>{todo.value}</span>
                                <button>Edit</button>
                                <button>x</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Todolist