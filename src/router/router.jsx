import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Home from "../Pages/Home/Home";
import Detail from "../Pages/Detail/Detail";
import Blog from "../Pages/Blog/Blog";
import Checkout from "@/Pages/Checkout/Checkout";






const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",

        element: <Register />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/details",
        element: <Detail />,
      },
      {
        path: "/blog/:id",
        element: <Blog />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
]);

export default router;
