import React, { useContext } from 'react'
import { Context } from './Context';
import './showExpens.css'
function ShowExpens() {
  const {expenseData}=useContext(Context)
  return (
    <div>
      {expenseData.map(expense=><div className='showExp-Details'><span>{expense.title}</span><span className='priceExp'> {expense.price}<br/></span></div>)}
      <hr style={{
        width:'830%'
      }}/>
    </div>
  )
}

export default ShowExpens