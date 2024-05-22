import React from 'react'

const NewTransaction = ({text, amount, setAmount, setText, handleSubmit}) => {
  return (
    <>
        <h3>Add new transaction</h3>
        <form onSubmit={(e)=>handleSubmit(e)}>
        <div className="form-control">
          <label htmlFor='text'>Text</label>
          <input 
          required
          type="text" 
          placeholder="Enter text..."
          value={text}
          onChange={(e)=>setText(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount <br /> {/* (negative - expense, positive - income)*/}</label> 
          <input 
          required
          type="number" 
          placeholder="Enter amount..." 
          value={amount}
          onChange={(e)=>setAmount(e.target.value)}
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}

export default NewTransaction