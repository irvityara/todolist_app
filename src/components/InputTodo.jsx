import React from "react";

function InputTodo() {
    return (
        <div style={{display:"flex", gap:"30px"}}>
            <input
                type="text"
                placeholder="What to do"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
            />
            <div>
                <button onClick={handleAddTodo}>
                    Add
                </button>
            </div>
        </div>
    )
}
export default InputTodo