import React from 'react';
import {useSelector} from 'react-redux'
import ProductCard from '../../components/ProductCard/ProductCard';

const Cart = () => {
    const carts = useSelector((state)=> state.cart)
    console.log("carts", carts)
    return (
        <div className='grid md:grid-cols-3'>
            {
                carts?.map(product => <ProductCard key={product._id} product={product} />)
            }
        </div>
    );
};

export default Cart;