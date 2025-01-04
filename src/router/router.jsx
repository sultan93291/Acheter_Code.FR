import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Login from "../Pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
    ],
  },
]);

export default router;
