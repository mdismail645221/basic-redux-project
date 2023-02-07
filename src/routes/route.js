import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Product from "../pages/Product/Product";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <div>Not found</div>,
        children: [
            {
                path: '/product',
                element: <Product></Product>
            }
        ]
    }
])