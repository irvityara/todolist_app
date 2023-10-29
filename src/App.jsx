import InputTodo from "./components/InputTodo";
import Todoheader from "./components/Todoheader";
import Todolist from "./components/todolist";



export default function App(){
  return (
    <>
      <Todoheader />
      <InputTodo />
      <Todolist />
    </>
  )
}