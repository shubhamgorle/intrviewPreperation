import React from 'react'
import { Link } from 'react-router-dom'
const Product = () => {
    const id = 1;
  return (
    <div>
      <h3>product</h3>
      <Link to={`/product/details/${id}`}>Detalis</Link>
    </div>
  )
}

export default Product
