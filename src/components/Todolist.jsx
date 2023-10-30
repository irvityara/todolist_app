import { useDispatch, useSelector } from "react-redux";
import { editTodo, removeTodo, searchTodo, toggleComplete } from "../slice/todoSlice";

const Todolist = () => {
    const todos = useSelector((state) => state.todos.todos);
    const filteredTodos = useSelector((state) => state.todos.filteredTodos);
    const filter = useSelector((state) => state.todos.filter);
    
    const isLoading = useSelector((state) => state.todo);
    const dispatch = useDispatch();

    const currentTodos = filter === "ALL" ? todos : filteredTodos;

    return (
        <div>
            {isLoading ? (
                <div>loading...</div>
            ) : (
                    currentTodos.map((todo, index) => (
                        <div className="listBox" key={index}>
                            <input className="checkBox" type="checkbox" onClick={() => dispatch(toggleComplete({ filter: todo.id }))} />
                            <div className="listTodo"
                                key={todo.id}>{todo.content}
                                <span style={{
                                    textDecoration: todo.completed ? "line-through" : "none"
                                }}
                                onClick={() => dispatch(searchTodo({filter : todo.id}))}>{todo.value}</span>
                            </div>
                            <div>
                                <button className="editButton" onClick={() => dispatch(editTodo({ filter: todo.id }))}>✏️</button>
                                <button className="deleteButton" onClick={() => dispatch(removeTodo({ filter : todo.id }))}>🗑️</button>
                            </div>
                    </div>
                ))
            )}
        </div>
    );
};
  
export default Todolist;
