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
 

 
 

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
