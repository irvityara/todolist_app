import { useContext } from "react";
import { TodosContext } from "../context/TodosContext";

const useTodos = () => {
  const context = useContext(TodosContext);

  if (!context) {
    throw new Error("useTodos must be used inside TodosProvider");
  }

  return context;
};

export default useTodos;