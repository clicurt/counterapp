import React from 'react'

interface CounterProps {
  currentCount: number;
}

const Counter: React.FC<CounterProps> = props => <h1>{props.currentCount}</h1>

export default Counter;