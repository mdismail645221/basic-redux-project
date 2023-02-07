import React, { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';

const Product = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch("product.json").then(res => res.json()).then(data => setProducts(data))
    },[])

    return (
        <div className='grid md:grid-cols-3'>
            {
                products.map(product=> <ProductCard key={product.id} product={product}></ProductCard>)
            }
        </div>
    );
};

export default Product;