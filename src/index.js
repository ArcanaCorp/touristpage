import React from 'react'
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './assets/css/variables.css'
import './assets/css/global.css'
import './assets/css/constants.css'

import HomePage from './pages/HomePage';
import LayoutPage from './pages/LayoutPage';
import TourPage from './pages/TourPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutPage/>,
        children: [
            {
                path: '/',
                element: <HomePage/>
            },
            {
                path: '/about',
                element: <h1>Nosotros</h1>
            },
            {
                path: '/contact',
                element: <h1>Contáctanos</h1>
            },
            {
                path: '/tours/:slug',
                element: <TourPage/>
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <>
        <RouterProvider router={router} />
    </>
)