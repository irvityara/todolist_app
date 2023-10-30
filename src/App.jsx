// Import context
import TodosProvider from "./context/TodosContext";

import { RouterProvider } from "react-router-dom";
import router from "./constants/router";

function App() {
  return (
    <TodosProvider>
        <RouterProvider router={router} />
    </TodosProvider>
  );
}

export default App;