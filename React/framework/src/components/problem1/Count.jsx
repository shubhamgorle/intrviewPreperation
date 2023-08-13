import React from 'react'
const Count = ({name, price, id, quantity, HandleQuantity}) => {
  return (
    <div>
    <h3>{name}</h3>
    <h3>{price}</h3>
    <h3 onClick={()=>{HandleQuantity(1, id)}}>+</h3>
    <h3>{quantity}</h3>
    <button  onClick={()=>{HandleQuantity(-1, id)}} disabled={quantity===0}>-</button>
    </div>
  )
}

export default Count
