import {
  createBrowserRouter
} from "react-router-dom";


// component
import Home from "../../pages/Home";
import ErrorPage from "../../pages/error-page";
import AuthPage from "../../pages/AuthPage";
import Dashboard from "../../pages/Dashboard";
import {ProtectedRoute} from "../../components/molecules";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: <ProtectedRoute><AuthPage /></ProtectedRoute>
  },
  {
    path: '/register',
    element: <ProtectedRoute><AuthPage /></ProtectedRoute>
  },
 {
    path: '/dashboard',
    element: <Dashboard />
 }

])


export default router