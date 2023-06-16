import React from 'react'

export default function Scanner({data, changeHandler}) {
  return (
    <>
    <div>
        <label htmlFor="company">Company:- </label>
        <input autoComplete="off"  onChange={changeHandler} value={data?.company} type="text" name="company" id="company" required/>
    </div>
    <div>
        <label htmlFor="model">Model:- </label>
        <input autoComplete="off"  onChange={changeHandler} value={data?.model} type="text" name="model" id="model" required/>
    </div>
    <div>
        <label htmlFor="variant">Category:- </label>
        <input  autoComplete="off" onChange={changeHandler} value={data?.variant} type="text" name="variant" id="variant"  required/>
    </div>
    </>
  )
}
