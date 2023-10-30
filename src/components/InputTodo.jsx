import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, getTodo } from "../redux/reducers/todo-reducer";

const { todos } = useSelector((state) => state.todos);
const [inputText, setInputText] = useState("");
const dispatch = useDispatch();

const handleInput = (e) => {
    setInputText(e.target.value);
};



function InputTodo() {
    const dispatch = useDispatch();
    const [input, setInput] = useState("")

    useEffect(() => {
        dispatch(getTodo());
      }, []);
    

    const handleClick = (e) => {
        e.preventDefault()
        let newTodo = {
          value: input,
          status: false
        }
    
        dispatch(addTodo(newTodo))
      }


    return (
        <div className="todoBox">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="What to do"
                style={{padding:"8px", width:"250px", fontSize:"15px"}}
            />
            <div style={{alignItems:"center"}}>
                <button className="addButton" onClick={handleClick}>
                    Add
                </button>
            </div>
        </div>
    )
}
export default InputTodo;