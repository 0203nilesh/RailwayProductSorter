import React from 'react'

export default function Scanner({data}) {
  return (
    <>
    <p> <span>Model:-</span> <span className="value">{data.model}</span> </p>
    <p> <span>Variant:-</span> <span className="value">{data.variant}</span> </p>
    </>
  )
}
