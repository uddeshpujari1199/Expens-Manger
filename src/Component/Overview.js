import React, { useContext } from 'react'
import './overview.css'
import { Context } from './Context';
function Overview() {
  const budget=2000;

  const {totalExp}=useContext(Context)

  return (
    <div className='over'>
        <div>Budget: Rs.{budget}</div>
        <div className='remain'>Remaining: Rs.{budget-totalExp}</div>
        <div className='spend'>Spend So Far: {totalExp}</div>
    </div>
  )
}

export default Overview