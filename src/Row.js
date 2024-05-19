import React, { useState } from 'react';
import Button from './Button';


export default function Row() {
    const [input,setInput] = useState('');
    const handleClick = (e) =>{
       if(e === "="){
         setInput(prev=> eval(prev))
       }
       else if(e === "AC"){
        setInput("");
       }
       else{
        setInput(prev=>prev + e)
       }
    }
  return (
   <>
    <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" name="" id=""  />
     <div className='row'>
      <Button value={"0"} handleClick={handleClick}/>
      <Button value={"1"} handleClick={handleClick}/>
      <Button value={"2"} handleClick={handleClick}/>
    </div>
    <div className='row'>
      <Button value={"3"} handleClick={handleClick}/>
      <Button value={"4"} handleClick={handleClick}/>
      <Button value={"5"} handleClick={handleClick}/>
    </div>
    <div className='row'>
      <Button value={"6"} handleClick={handleClick}/>
      <Button value={"7"} handleClick={handleClick}/>
      <Button value={"8"} handleClick={handleClick}/>
    </div>
    <div className='row'>
      <Button value={"9"} handleClick={handleClick}/>
      <Button value={"="} handleClick={handleClick}/>
      <Button value={"+"} handleClick={handleClick}/>
    </div>
    <div className='row'>
      <Button value={"*"} handleClick={handleClick}/>
      <Button value={"/"} handleClick={handleClick}/>
      <Button value={"-"} handleClick={handleClick}/>
      <Button value={"AC"} handleClick={handleClick}/>
    </div>
   </>
  )
}
