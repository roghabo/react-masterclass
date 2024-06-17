import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ToDoList from "../ToDoList";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <ToDoList />,
      },
    ],
  },
]);

export default router;
