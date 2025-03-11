import { useState } from 'react'
import { UseCounterProp } from './useCounter.types'

export const useCounter = ({ initialCounter = 0 }: UseCounterProp = {}) => {
  const [count, setCount] = useState(initialCounter)
  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  return { count, increment, decrement }
}
