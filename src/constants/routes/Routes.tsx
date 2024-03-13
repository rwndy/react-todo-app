import {
  createBrowserRouter,
} from "react-router-dom";

// component
import Home from "../../pages/Home";
import ErrorPage from "../../error-page";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  }
])


export default router