import React from 'react'
import { Link } from 'react-router-dom'

function Products() {
    const products = [
        { id: 101, name: 'Product 1', price: '$10' },
        { id: 102, name: 'Product 2', price: '$20' },
        { id: 103, name: 'Product 3', price: '$30' },
        { id: 104, name: 'Product 4', price: '$40' },
    ];
  return (
    <div>
        <h2 className='text-red-400 text-3xl'>Products List</h2>
        <ul>
            {products.map(product => (
                <li key={product.id}>
                    <h3>{product.name}</h3>
                    <p>{product.price}</p>
                    <Link to={`/products/${product.id}`}>
                        View Details
                    </Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Products