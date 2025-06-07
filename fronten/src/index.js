import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './index.css';
import Login from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import ClientView from './CreateClientView'
import UserView from './CreateUserView';
import FullView from './FullClientsModuleView';
import UpdateView from './UpdateClientView';

const router = createBrowserRouter([
{
    path: '/create-client',
    element: <ClientView />,
  },
  {
    path: '/create-user',
    element: <UserView />,
  },
  {
    path: '/full-client',
    element: <FullView />,
  },
  {
    path: '/update-client',
    element: <UpdateView />,
  },
   {
    path: '/login',
    element: <Login />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
