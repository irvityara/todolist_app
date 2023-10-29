import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodoAction } from "../redux/reducers/todo-reducers";

const { todos } = useSelector((state) => state.todos);
const [inputText, setInputText] = useState("");
const dispatch = useDispatch();
const handleInput = (e) => {
    setInputText(e.target.value);
};

const handleClick = (e) => {
    e.preventDefault()
    const newId = todos.length + 1;

    const newTodo = {
        id: newId,
        value: inputText,
    };
    dispatchEvent(addTodoAction(newTodo));
};

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