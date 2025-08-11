import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import ClientView from './CreateClientView';
import UserView from './CreateUserView';
import FullView from './FullClientsModuleView';
import Update from './UpdateClientView';
import Login  from './Login';
import App from './App';
import CreateOrder from './CreateOrder';
import GarmentView from './Garments';
import ServicesView from './Services';
import  Dashboard  from './Dashboard';
import { List } from './components/garments/List';



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
    element: <Update/>
  },
  
   {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/hola',
    element: <CreateOrder />,
  },
  {
    path: '/alta-garment',
    element: <GarmentView />,
  },
   {
    path: '/alta-services',
    element: <ServicesView />,
  },
 {
    path: '/App',
    element: <App />,
  },
   {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/garments',
    element: <List />,
  },

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
