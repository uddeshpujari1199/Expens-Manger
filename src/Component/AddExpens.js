import React, { useContext, useRef } from 'react'
import { Context } from './Context';
import './addExp.css'
function AddExpens() {

  const titleRef=useRef();
  const priceRef=useRef();

  const{SetExpenseData,SetTotalExp}=useContext(Context);

  return (
    <div className='add-input'>
        <div className='inputToHE'>
        <input ref={titleRef} type='text' placeholder='Enter Name'/>
        <input ref={priceRef} type='number' placeholder='Enter Amount'/>
        </div>
        <div>
        <button
          onClick={()=>{
            const title=titleRef.current.value;
            const price=parseInt(priceRef.current.value);
            SetExpenseData(prevData=>[...prevData,{title,price}])
            SetTotalExp(prevVal=>price+prevVal)
            titleRef.current.value="";
            priceRef.current.value="";
          }}
        >Add</button>
        </div>
    </div>
  )
}

export default AddExpens