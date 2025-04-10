import Link from 'next/link'
import React from 'react'

function ProductList() {
  const id = 100;
  return (
    <div>
        <h1>Product list</h1>
      <ul>
        <li>
          <Link href="products/1">Product 1</Link>
          <Link href="products/2">Product 2</Link>
          <Link href="products/3" replace>Product 3</Link>
          <Link href={`products/${id}`}>Product 100</Link>
        </li>
      </ul>
    </div>
  )
}

export default ProductList
