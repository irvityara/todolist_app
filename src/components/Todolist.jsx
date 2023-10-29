import { useSelector } from "react-redux";

export default function Todolist() {
    const { todos } = useSelector(state => state.todos)

    return (
        <div style={{display:"flex", alignItems:"center"}}>
            (todos.map{(todo) => (
                <div key={todo.id} >
                    <div>{todo.value}</div>
                    <button>Edit</button>
                    <button>X</button>
                </div>
            )})
        </div>

        
    )
}