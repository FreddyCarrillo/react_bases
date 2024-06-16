import PropTypes from 'prop-types';
import { useState } from 'react';

export const CounterApp = ({ value }) => {

  const [ counter, setCounter ] = useState(value);

  const handleAdd = () => {
    // value = 1000;
    setCounter(counter + 1);
  }

  const handleMin = () => setCounter(counter - 1);

  const handleReset = () => setCounter(value);

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{ counter }</h2>
      <button onClick={handleAdd}>
        +1
      </button>
      <button onClick={handleMin}>
        -1
      </button>
      <button onClick={handleReset}>
        reset
      </button>
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number
}
