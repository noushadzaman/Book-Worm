import {
    createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Cart from "../pages/cart/Cart";
import CheckOut from "../pages/checkout/CheckOut";
import SingleBook from "../pages/books/SingleBook";
import PrivateRoute from "./PrivateRoute";
import Order from "../pages/order/Order";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/orders",
                element: <Order />
            },
            {
                path: "/about",
                element: <h1>about</h1>
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/checkout",
                element: <PrivateRoute><CheckOut /></PrivateRoute>
            },
            {
                path: "/books/:id",
                element: <SingleBook />
            },
        ]
    },
]);

export default router;