import useTodos from "../hooks/useTodos";


const Todolist = () => {
    const { todos } = useTodos();

    return (
        <div>
            <div className="listBox">
                <div className="checkBox">
                    <input type="checkbox" />
                </div>
                    {isLoading ? (
                        <div>loading...</div>
                    ) : (
                        <div className="listTodo">
                        {todos.map((todo) => (
                            <div key={todo.id}>{todo.content}
                                <span>{todo.value}</span>
                                <button>Edit</button>
                                <button>x</button>
                            </div>
                        ))}
                    </div>   
                    )}
                </div>
        </div>
    )
}

export default Todolist;