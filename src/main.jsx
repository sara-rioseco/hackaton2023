import React from 'react'
import ReactDOM from 'react-dom/client'
import { 
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './error-page';
import Home from './pages/Home/home';
import Post from './pages/Post/post';
/* import ListApplicants from './pages/ListApplicants/list-applicants';
import ProcessList from './pages/ProcessList/process-list'; */

import Calls from './components/convocatorias/convocatorias';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/applicants",
    element: <Post />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/post",
    element: <Post />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/listprocesses",
    element: <Post />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/convocatorias",
    element: <Calls />,
    errorElement: <ErrorPage />,
  },

 
 

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
