import React, { useState } from "react";

const TodoList = () => {

    return (
        <div className="containerList">
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
    )
}

export default Todolist