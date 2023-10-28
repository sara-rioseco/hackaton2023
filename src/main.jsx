import React from 'react'
import ReactDOM from 'react-dom/client'
import { 
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './error-page';
import Home from './pages/Home/home';
import Admin from './pages/Admin/admin';
/* import ListApplicants from './pages/ListApplicants/list-applicants';
import ProcessList from './pages/ProcessList/process-list'; */

import OfertaGenerate from './components/convocatorias/oferta'
import IconBreadcrumbs from  './components/detalleApplicants/breadcrumbs';
import StepperHorizontal from  './components/detalleApplicants/detalle';
import Dashboarr from './pages/DetalleApplicants/detalle-applicants';
import Landing from './pages/Landing/landing';
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
    path: "/convocatorias",
    element: <OfertaGenerate/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/detalle",
    element: <IconBreadcrumbs />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/detalles",
    element: <StepperHorizontal />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/oferta",
    element: <Dashboarr/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <Landing />,
    errorElement: <ErrorPage />,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
