import {
  createBrowserRouter,
} from "react-router-dom";

// component
import Home from "../../pages/Home";
import ErrorPage from "../../pages/error-page";
import AuthPage from "../../pages/AuthPage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: <AuthPage />
  },
  {
    path: '/signup',
    element: <AuthPage />
  }

])


export default router