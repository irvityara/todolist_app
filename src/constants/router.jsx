import { createBrowserRouter } from "react-router-dom";

import TodoPage from "../pages/todoPage";

const router = createBrowserRouter([
  {
    path: "/",
        element:
            <div style={{ display: "grid", justifyContent: "center", alignItems: "center", marginTop: "80px", marginBottom: "70px" }}>
                <h1>What's the plan for today?</h1>
                <TodoPage />
            </div>
  },
//   {
//     path: "/context",
//       element:
//           <div>
//               ,
//           </div>
          
//   },
]);

export default router;