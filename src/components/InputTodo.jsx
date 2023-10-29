import React from "react";

function InputTodo() {
    return (
        <div className="todoBox" style={{display:"flex", gap:"30px", justifyContent:"center", alignItems:"center", marginBottom:"40px"}}>
            <input
                type="text"
                placeholder="What to do"
                style={{padding:"8px"}}
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