import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { UserContextProvider } from './context/UserContext';
import App from './App';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Auth from './Pages/Auth'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/auth",
        element: <Auth/>,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <UserContextProvider >
        <RouterProvider router={router} />
    </UserContextProvider>
);
