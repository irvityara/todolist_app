import React from "react";

function InputTodo() {
    return (
        <div className="todoBox">
            <input
                type="text"
                placeholder="What to do"
                style={{padding:"8px", width:"250px", fontSize:"15px"}}
            />
            <div style={{alignItems:"center"}}>
                <button className="addButton">
                    Add
                </button>
            </div>
        </div>
    )
}
export default InputTodo