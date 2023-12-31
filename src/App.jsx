// Import store cara Redux
import { Provider } from "react-redux";
import { store } from "./store";

import { RouterProvider } from "react-router-dom";
import router from "./constants/router";

function App() {
  return (
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
  );
}

export default App;