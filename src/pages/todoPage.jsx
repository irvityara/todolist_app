// import useTodos from "../hooks/useTodos";
// import Todolist from "../components/todolist";



import { useState } from "react";
import { useDispatch } from "react-redux";

import { addTodos, searchTodo } from "../slice/todoSlice";
import Todolist from "../components/todolist";



const TodoPage = () => {
    const [inputValue, setInputValue] = useState();
  
    const dispatch = useDispatch();
    const filteredTodos = filter === 'ALL' ? state.todos :
        filter === 'ACTIVE' ? state.todos.filter((todo) => !todo.completed) :
        filter === 'COMPLETE' ? state.todos.filter((todo) => todo.completed) :
            state.todos;
  
    return (
    <div>
          <div style={{ display: "grid", justifyContent: "center", alignItems: "center" }}>
              <div className="todoBox">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="What to do"
                    style={{padding:"8px", width:"250px", fontSize:"15px"}}
                  />
                  <div style={{ alignItems: "center" }}>
                      <button className="addButton" onClick={() => dispatch(addTodos({ text: inputValue }))}>
                          Add
                      </button>
                  </div>
    
              </div>
              <div className="filterBox">
                  <button onClick={() => dispatch(searchTodo("ALL"))} className="filterButton">ALL</button>
                  <button onClick={() => dispatch(searchTodo("ACTIVE"))} className="filterButton">ACTIVE</button>
                  <button onClick={() => dispatch(searchTodo("COMPLETED"))}className="filterButton">COMPLETED</button>
              </div>
              
                <Todolist />
          </div>  
    </div>
    );
  };

export default TodoPage;
//context
// const TodoPage = () => {
//   const [inputValue, setInputValue] = useState();
//   const { addTodos } = useTodos();
//   const handleCreateTodos = () => addTodos(inputValue);
    

//   return (
//     <div>
//           <div style={{ display: "grid", justifyContent: "center", alignItems: "center" }}>
//               <div className="todoBox">
//                 <input
//                     type="text"
//                     value={inputValue}
//                     onChange={(e) => setInputValue(e.target.value)}
//                     placeholder="What to do"
//                     style={{padding:"8px", width:"250px", fontSize:"15px"}}
//                   />
//                   <div style={{ alignItems: "center" }}>
//                       <button className="addButton" onClick={handleCreateTodos}>
//                           Add
//                       </button>
//                   </div>
    
//               </div>
//               <div className="filterBox">
//                   <button className="filterButton">ALL</button>
//                   <button className="filterButton">ACTIVE</button>
//                   <button className="filterButton">COMPLETED</button>
//               </div>
//           <Todolist />
//           </div>  
//     </div>
//   );
// };

