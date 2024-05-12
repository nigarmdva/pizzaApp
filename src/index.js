import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './component/App';
import Main from './component/Main';
import About from './component/About';
import Contact from './component/Contact';
import Error from './component/Error';

const router = createBrowserRouter([
  { path: '/',  element: <App />, children: [
    { path: '/',  element: <Main /> },
    { path: '/main',  element: <Main /> },
    { path: '/about',  element: <About /> },
    { path: '/contact',  element: <Contact /> },
    { path: '*', element: <Error /> }
  ]}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
