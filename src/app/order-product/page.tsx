"use client"
import { useRouter } from 'next/navigation';
import React from 'react'



function OrderProduct() {
    const router = useRouter();
    const handleClick = () =>{
        console.log("order placed");

        router.push('/');
    }
  return (
    <div>
      <h1>
        Order Product
      </h1>
      <button onClick={handleClick}>Place Order</button>
    </div>
  )
}

export default OrderProduct
