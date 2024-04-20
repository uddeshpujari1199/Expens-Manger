
import Overview from './Component/Overview';
import AddExpens from './Component/AddExpens';
import ShowExpens from './Component/ShowExpens'
import { createContext, useState } from 'react';
import { Context } from './Component/Context';
import'./App.css';

// export const Context=createContext()

function App() {
  const[totalExp,SetTotalExp]=useState(0);
  const [expenseData,SetExpenseData]=useState([]);

  return (
    <Context.Provider value={{totalExp,SetTotalExp,expenseData,SetExpenseData}}>
    <div className="App">
      <div className='MyBudget'>
      <span>My Budget Planer</span>
      </div>
      <div className='overView'>
      <Overview />
      </div>
      <div className='showExp'>
        <span className='exp'>Expense</span>
      <ShowExpens/>
      </div>
      <div className='addExp'>
      {/* <AddExpens SetTotalExp={SetTotalExp} SetExpenseData={SetExpenseData}/> */}
      <span className='addExps'>Add Expense</span>
      <AddExpens/>
      </div>
    </div>
    </Context.Provider>
  );
}

export default App;
