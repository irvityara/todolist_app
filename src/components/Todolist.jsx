import React from "react";
import { useSelector } from "react-redux";
import { addTodo, editTodo, toggleTodo, deleteTodo } from './redux/todos';

const TodoList = () => {
  const [newTodo, setNewTodo] = useState('');
  const [editingTodo, setEditingTodo] = useState(null);
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    dispatch(addTodo({ text: newTodo, completed: false }));
    setNewTodo('');
  };

  const handleEditTodo = (id, text) => {
    dispatch(editTodo({ id, text }));
    setEditingTodo(null);
  };
    return (
        <div>
          <h2>Todo List</h2>
          <input
            type="text"
            placeholder="Add a new Todo"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button onClick={handleAddTodo}>Add</button>
          <ul>
            {todos.map((todo) => (
              <li key={todo.id}>
                {editingTodo === todo.id ? (
                  <>
                    <input
                      type="text"
                      value={todo.text}
                      onChange={(e) => handleEditTodo(todo.id, e.target.value)}
                    />
                    <button onClick={() => handleEditTodo(todo.id, todo.text)}>Save</button>
                  </>
                ) : (
                  <>
                    <span
                      style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                      onClick={() => dispatch(toggleTodo({ id: todo.id }))}
                    >
                      {todo.text}
                    </span>
                    <button onClick={() => setEditingTodo(todo.id)}>Edit</button>
                    <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      );
    };
    
    export default TodoList;