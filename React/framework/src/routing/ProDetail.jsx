import React from 'react'
import { useParams } from 'react-router-dom'

const ProDetail = () => {
    const {id} = useParams()
  return (
    <div>
      <h1>Product Details of {id}</h1>
    </div>
  )
}
export default ProDetail
