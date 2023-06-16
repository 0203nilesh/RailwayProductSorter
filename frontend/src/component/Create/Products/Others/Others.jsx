import React from 'react'

export default function Others({data, changeHandler}) {
  return (
    <>
    <div>
        <label htmlFor="cpu_make">Company of CPU:- </label>
        <input autoComplete="off"  onChange={changeHandler} value={data?.cpu_make} type="text" name="cpu_make" id="cpu_make" required/>
    </div>
    <div>
        <label htmlFor="monitor_make">Company of Monitor:- </label>
        <input autoComplete="off" onChange={changeHandler} value={data?.monitor_make} type="text" name="monitor_make" id="monitor_make" required/>
    </div>
    <div>
        <label htmlFor="cpu_model">Model of CPU:- </label>
        <input autoComplete="off"  onChange={changeHandler} value={data?.cpu_model} type="text" name="cpu_model" id="cpu_model" required/>
    </div>
    <div>
        <label htmlFor="cpu_processor">Processor of CPU:- </label>
        <input  autoComplete="off" onChange={changeHandler} value={data?.cpu_processor} type="text" name="cpu_processor" id="cpu_processor" required/>
    </div>
    <div>
        <label htmlFor="size">Monitor size:- </label>
        <input  autoComplete="off" onChange={changeHandler} value={data?.size} type="number" name="size" id="size" required/>
    </div>
    <div>
        <label htmlFor="variant">Monitor Category:- </label>
        <input autoComplete="off"  onChange={changeHandler} value={data?.variant} type="text" name="variant" id="variant" required/>
    </div>
    </>
  )
}
