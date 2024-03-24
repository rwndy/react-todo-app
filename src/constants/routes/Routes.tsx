import {
  createBrowserRouter
} from "react-router-dom";


// component
import Home from "../../pages/Home";
import ErrorPage from "../../pages/error-page";
import AuthPage from "../../pages/AuthPage";
import Dashboard from "../../pages/Dashboard";
import { PrivateRoute, PublicRoute } from "../../components/molecules";


const router = createBrowserRouter([
  {
    path: '/',
    element: <PublicRoute><Home /></PublicRoute>,
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: <PublicRoute><AuthPage /></PublicRoute>
  },
  {
    path: '/register',
    element: <PublicRoute><AuthPage /></PublicRoute>
  },
 {
    path: '/dashboard',
    element: <PrivateRoute><Dashboard /></PrivateRoute>
 }

])


export default router