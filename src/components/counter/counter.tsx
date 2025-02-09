import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const IncrementCount = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h1>{count}</h1>
      <button onClick={IncrementCount}>Increment</button>
    </>
  );
};

export default Counter;
