import React from 'react'

export default function Monitor({data}) {
  return (
    <>
    <p> <span>Size:- </span> <span className="value">{data.size} inch</span> </p>
    <p> <span>Model:-</span> <span className="value">{data.model}</span> </p>
    </>
  )
}
