import React from 'react'


function ProductDetails({params}: {params: {productId: string}}) {

  return (
    <div>
      <h1>Product details {params.productId}</h1>
    </div>
  )
}

export default ProductDetails
