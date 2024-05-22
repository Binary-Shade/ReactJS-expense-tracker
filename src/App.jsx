import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Balance from './components/Balance'
import History from './components/TransactioList'
import NewTransaction from './components/NewTransaction'
import IncomeExpense from './components/IncomeExpense'
function App() {
  const [items, setItems] = useState([])

  return (
    <>
      <div className="App">
      <Header />
        <div className="container">
          <Balance />
          <IncomeExpense />
          <History />
          <NewTransaction 
            
          />
        </div>
      </div>
    </>
  )
}

export default App
