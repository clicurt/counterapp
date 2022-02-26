import React, { useState } from 'react';
import './App.css';
import Counter from './components/Counter'
import Button from './components/Button'

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  // reset counter
  const resetHandler = () => setCount(0);
  const MAXCOUNT = 100;
  const MINCOUNT = 0;

  // increase counter
  const incrementHandler = () => {
    if (count < MAXCOUNT) {
      setCount(previousCount => previousCount + 1);
    }
  }

  // decrease counter
  const decrementHandler = () => {
    if (count > MINCOUNT) {
      setCount(previousCount => previousCount - 1);
    }
  }

  return (
    <div className="text-center overlay">
      <Button onReset={resetHandler} name='Reset'/>
      <Button onDecrease={decrementHandler} name='-' buttonType='decrement' />
      <div className="counter_box">
        <Counter currentCount={count} />
      </div>
      <Button onIncrease={incrementHandler} name='+' buttonType='increment' />
    </div>
  );
}

export default App;
