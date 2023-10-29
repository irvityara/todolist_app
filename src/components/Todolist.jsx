import React from "react";

function Todolist(){
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
                    <span>
                        Buy Egg
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
                    <span>
                        Buy T-Shirt
                    </span>
                </div>
                <div>
                    <button>Edit</button>
                    <button>X</button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Todolist