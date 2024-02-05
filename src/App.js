import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header";
import { Body } from "./components/Body/Body";
import { AboutUs } from "./components/AboutUs/AboutUs";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { ContactUs } from "./components/ContactUs/ContactUs";
import { Error } from "./components/Error/Error";
import ProductDetails from "./components/ProductDetails/ProductDetails";

const AppLayout = () => {
    return (
        <div className="app">
            {/* Virtual DOM */}
            <Header />
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/', element: <Body />
            },
            {
                path: '/about-us', element: <AboutUs />
            },
            {
                path: '/contact-us', element: <ContactUs />
            },
            {
                path: '/product/:id', element: <ProductDetails />
            }
        ],
        errorElement: <Error />
    }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<AppLayout />); if no routing, direct load app layout

root.render(<RouterProvider router={appRouter} />);