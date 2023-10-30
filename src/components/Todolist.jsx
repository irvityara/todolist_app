//context
// import useTodos from "../hooks/useTodos";

import { useSelector } from "react-redux";

const Todolist = () => {
    const todos = useSelector((state) => state.todos.todos);
    return (
      <div>
        {todos.map((todo) => (
          <div key={todo.id}>{todo.content}</div>
        ))}
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

