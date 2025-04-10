"use client"
import { usePathname } from 'next/navigation'
import React from 'react'


function notFound() {
  const pathName = usePathname();
  const productId = pathName.split("/")[2];
  const reviewId = pathName.split("/")[4];
  return (
    <div>
      <h1>Review {reviewId} not found for {productId}</h1>
    </div>
  )
}

export default notFound
