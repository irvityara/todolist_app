import { useState } from "react";
import { useDispatch } from "react-redux";

import { addTodos, searchTodo } from "../slice/todoSlice";
import Todolist from "../components/Todolist";


const TodoPage = () => {
    const [inputValue, setInputValue] = useState();
  
    const dispatch = useDispatch();
  
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
                    <button onClick={() => dispatch(searchTodo({ filter: "ALL"}))} className="filterButton">ALL</button>
                    <button onClick={() => dispatch(searchTodo({ filter: "ACTIVE"}))} className="filterButton">ACTIVE</button>
                    <button onClick={() => dispatch(searchTodo({ filter: "COMPLETED"}))}className="filterButton">COMPLETED</button>
              </div>
              
                <Todolist />
          </div>  
    </div>
    );
  };

export default TodoPage;