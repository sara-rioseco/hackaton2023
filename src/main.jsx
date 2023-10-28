import React from 'react'
import ReactDOM from 'react-dom/client'
import { 
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './error-page';
import Home from './pages/Home/home';
import Admin from './pages/Admin/admin';
import Dashboarr from './pages/DetalleApplicants/detalle-applicants';
//import Landing from './pages/Landing/landing';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/applicants",
    element: <Admin />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin",
    element: <Admin />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/listprocesses",
    element: <Admin />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/oferta",
    element: <Dashboarr/>,
    errorElement: <ErrorPage />,
  },
  {
<<<<<<< HEAD
    path: "/circle",
    element: <Circular />,
    errorElement: <ErrorPage />,
  },
  /*{
    path: "/landing",
=======
    path: "/home",
>>>>>>> 9776e47e9b939d5adcdb6e0d80415db9b564231a
    element: <Landing />,
    errorElement: <ErrorPage />,
  },
*/
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
