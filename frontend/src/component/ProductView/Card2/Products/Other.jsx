import React from 'react'

export default function Other({data}) {
  return (
    <>
    <p> <span>Size:- </span> <span className="value">{data?.size} inch</span> </p>
    <p> <span>Cpu Company:-</span> <span className="value">{data?.cpu_make}</span> </p>
    {/* <p> <span>CPU Model:-</span> <span className="value">{data?.model}</span> </p> */}
    <p> <span>Cpu Processor:-</span> <span className="value">{data?.cpu_processor}</span> </p>
    </>
  )
}
