import React from 'react'
import ReactDOM from 'react-dom/client'
import { 
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './error-page';
import Home from './pages/Home/home';
import Post from './pages/Post/post';
import Processes from './pages/Processes/processes';
import ListApplicants from './pages/ListApplicants/list-applicants';
import ProcessList from './pages/ProcessList/process-list';
import OfertaGenerate from './components/convocatorias/oferta'
import IconBreadcrumbs from  './components/detalleApplicants/breadcrumbs';
import StepperHorizontal from  './components/detalleApplicants/detalle';
import Circular from './components/detalleApplicants/circular-progress';
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
    element: <ListApplicants />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/post",
    element: <Post />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/processes",
    element: <Processes />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/listprocesses",
    element: <ProcessList />,
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
    path: "/circle",
    element: <Circular />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/landing",
    element: <Landing />,
    errorElement: <ErrorPage />,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
