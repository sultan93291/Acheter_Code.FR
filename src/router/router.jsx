import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Home from "../Pages/Home/Home";
import Detail from "../Pages/Detail/Detail";
import Blog from "../Pages/Blog/Blog";
import Checkout from "@/Pages/Checkout/Checkout";
import PubliceRouteProtector from "@/RouterProtector/PublicRouteProtector/PublicRouteProtector";
import GlobalSearch from "@/Pages/GlobalSearch/GlobalSearch";
import { SubmitEmail } from "@/Pages/SubmitEmail/SubmitEmail";
import { VerfiyOtp } from "@/Pages/VerifyOtp/VerfiyOtp";
import { ForgotPass } from "@/Pages/ForgotPass/ForgotPass";
import ForgotPassProtector from "@/RouterProtector/ForgotPassProtector/ForgotPassProtector";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/login",
        element: (
          <PubliceRouteProtector>
            <Login />
          </PubliceRouteProtector>
        ),
      },
      {
        path: "/register",

        element: (
          <PubliceRouteProtector>
            <Register />
          </PubliceRouteProtector>
        ),
      },
      {
        path: "/submit-email",

        element: (
          <PubliceRouteProtector>
            <SubmitEmail />
          </PubliceRouteProtector>
        ),
      },
      {
        path: "/verify-otp",
        element: (
          <PubliceRouteProtector>
            <VerfiyOtp />
          </PubliceRouteProtector>
        ),
      },
      {
        path: "/reset-pass",
        element: (
          <PubliceRouteProtector>
            <ForgotPass />
          </PubliceRouteProtector>
        ),
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/details/:id",
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
      {
        path: "/search",
        element: <GlobalSearch />,
      },
    ],
  },
]);

export default router;
