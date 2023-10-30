//context
// import useTodos from "../hooks/useTodos";

import { useDispatch, useSelector } from "react-redux";
import { editTodo, removeTodo } from "../slice/todoSlice";

const Todolist = () => {
    const todos = useSelector((state) => state.todos.todos);
    const isLoading = useSelector((state) => state.todo);
    const dispatch = useDispatch();

    return (
        <div>
            {isLoading ? (
                <div>loading...</div>
            ) : (
                    todos.map((todo) => (
                        <div className="listBox">
                            <input className="checkBox" type="checkbox" />
                            <div className="listTodo" key={todo.id}>{todo.content}
                                <span  >{todo.value}</span>
                            </div>
                            <div>
                                <button className="editButton" onClick={() => dispatch(editTodo(todo.id))}>✏️</button>
                                <button className="deleteButton" onClick={() => dispatch(removeTodo(todo.content))}>🗑️</button>
                            </div>
                    </div>
                ))
            )}
        </div>
    );
};
  
export default Todolist;

// context  
// const Todolist = () => {
//     const { isLoading, todos } = useTodos();

//     return (
//         <div>
//             {isLoading ? (
//                 <div>loading...</div>
//             ) : (
//                     todos.map((todo) => (
//                         <div className="listBox">
//                             <input className="checkBox" type="checkbox" />
//                             <div className="listTodo" key={todo.id}>{todo.content}
//                                 <span  >{todo.value}</span>
//                             </div>
//                             <div>
//                                 <button className="editButton">✏️</button>
//                                 <button className="deleteButton">🗑️</button>
//                             </div>
//                     </div>
//                 ))
//             )}
//         </div>
// )};

