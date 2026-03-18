import React from 'react'
import { useParams } from 'react-router-dom';
const products = [
        { id: 101, name: 'Product 1', price: '$10' },
        { id: 102, name: 'Product 2', price: '$20' },
        { id: 103, name: 'Product 3', price: '$30' },
        { id: 104, name: 'Product 4', price: '$40' },
    ];
function ProductDetail() {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));
  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: {product.price}</p>
    </div>
  )
}

export default ProductDetail