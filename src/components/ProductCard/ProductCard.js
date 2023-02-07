import React from 'react';
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom';
import { AddToCart, RemoveFromCart } from '../../redux/actionCreators/productAction';


const ProductCard = ({ product }) => {

    const dispatch = useDispatch()
    // console.log(dispatch)

    const { pathname } = useLocation();
    // console.log("pathname", pathname)

    return (
        <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100 relative">
            {pathname.includes("storeCart") &&<div className='absolute top-0 right-0 bg-[#007AFE] w-8 h-8 rounded-full grid items-center place-items-center'>
                <p className='text-white'>{product.quantity}</p>
            </div>}
            <img src={product.image} alt="images" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracking-wide">Donec lectus leo</h2>
                    <p className="dark:text-gray-100">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
                </div>
                {pathname.includes("storeCart") && <button onClick={() => dispatch(RemoveFromCart(product))} type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-[red]">Remove</button>}
                {!pathname.includes("storeCart") && <button onClick={() => dispatch(AddToCart(product))} type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-[#007AFE]">Add To Cart</button>}
            </div>
        </div>
    );
};

export default ProductCard;