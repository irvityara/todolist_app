import { useState } from "react";
import useTodos from "../hooks/useTodos";
import Todolist from "../components/todolist";


const TodoPage = () => {
  const [inputValue, setInputValue] = useState();
  const { addTodos } = useTodos();
  const handleCreateTodos = () => addTodos(inputValue);

  return (
    <div>
          <div style={{ display: "grid", justifyContent: "center", alignItems: "center" }}>
              <div className="filterBox">
                  <button className="filterButton">ALL</button>
                  <button className="filterButton">ACTIVE</button>
                  <button className="filterButton">COMPLETED</button>
              </div>

              <div className="todoBox">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="What to do"
                    style={{padding:"8px", width:"250px", fontSize:"15px"}}
                  />
                  <div style={{ alignItems: "center" }}>
                      <button className="addButton" onClick={handleCreateTodos}>
                          Add
                      </button>
                  </div>
              </div>
              
          <Todolist />
          </div>  
    </div>
  );
};

export default TodoPage;