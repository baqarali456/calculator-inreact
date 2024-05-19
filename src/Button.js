import React from 'react'

export default function Button({handleClick,value}) {
  return (
    <button onClick={(e)=>handleClick(e.target.innerText)}>{value}</button>
  )
}
