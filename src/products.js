import React from 'react'
import data from './data'

function Products(props) {
    return props.list.map((product, i) => {
        return (
            <div>
                <h1>{product.name}</h1>
                <h2>{product.price}</h2>
                <h3>{product.category}</h3>
            </div>
        )
    })
}

export default Products
