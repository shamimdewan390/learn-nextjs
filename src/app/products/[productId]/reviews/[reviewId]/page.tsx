import { notFound, redirect } from 'next/navigation';
import React from 'react'
notFound

type PPrams = {
  productId: string,
  reviewId: string
}

function ReviewDetails({ params }: { params: PPrams }) {
  const { reviewId, productId } = params;
  if(parseInt(reviewId) > 100){
    // notFound();
    redirect("/products")
  }
  return (
    <div>
      <h1>Review Details id: {reviewId} for product {productId}</h1>
    </div>
  )
}

export default ReviewDetails
