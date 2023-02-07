import React, { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';

import {useSelector} from 'react-redux'

const Product = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch("product.json").then(res => res.json()).then(data => setProducts(data))
    },[])

    const state = useSelector((state)=> state)
    console.log(state)


    return (
        <div className='grid md:grid-cols-3'>
            {
                products.sort((a, b)=> a._id - b._id).map(product=> <ProductCard key={product._id} product={product}></ProductCard>)
            }
        </div>
    );
};

export default Product;