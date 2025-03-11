import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)
  const [amount, setAmount] = useState(0)

  const IncrementCount = () => {
    setCount(count + 1)
  }
  return (
    <>
      <h1>{count}</h1>
      <button onClick={IncrementCount}>Increment</button>
      <input
        type="number"
        name="amount"
        value={amount}
        onChange={(e) => setAmount(parseInt(e.target.value))}
      />
      <button onClick={() => setCount(amount)}>Set</button>
    </>
  )
}

export default Counter
