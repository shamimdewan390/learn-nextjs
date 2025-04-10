import React from 'react'

function Docs({params}: {params: {slug:string}}) {
  const {slug} = params;
  if (slug?.length === 2) {
    return (
      <h1>1st params: {slug[0]} and {slug[1]}</h1>
    )
  }else if(slug?.length === 1){
    return (
      <h1>1st param: {slug[0]} </h1>
    )
  }
  return (
    <div>
     
      <h1>Docs </h1>
    </div>
  )
}

export default Docs
