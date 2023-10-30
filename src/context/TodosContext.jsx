import { createContext, useState } from "react";

export const TodosContext = createContext(null);

const TodosProvider = (props) => {
  const [todos, setTodos] = useState([]);

  const addTodos = (text) => {
    const newTodos = {
      content: text,
    };
    setTodos((prevTodos) => [...prevTodos, newTodos]);
  };

  const removeTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todos) => todos === id));
  };

  return (
    <TodosContext.Provider value={{ todos, addTodos, removeTodo }}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosProvider;