import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Cart from "../pages/Cart/Cart";
import Product from "../pages/Product/Product";
// import SaveCart from "../pages/SaveCart/SaveCart";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <div>Not found</div>,
        children: [
            {
                path: '/product',
                element: <Product></Product>
            },
            {
                path: '/storeCart',
                element: <Cart></Cart>
            },
        ]
    }
])