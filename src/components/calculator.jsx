import React, { useState } from 'react';
import Calculate from '../logic/calculate';
import '../styles/calculator.css';

export default function Calculator() {
  const [value, setValue] = useState('');

  const [obj, setObj] = useState({
    total: '',
    next: '',
    operation: '',
  });

  function cal(e) {
    if (e.target.innerText === 'AC') {
      const total = Calculate(obj, 'AC');
      if (total.total === null) setValue('');
      setObj(total);
    } else if (e.target.innerText === '+/-') {
      const total = Calculate(obj, '+/-');
      if (total.total) {
        setValue(total.total);
      }
    } else if (e.target.innerText === '=') {
      const total = Calculate(obj, '=');
      if (total.total) {
        setValue(total.total);
      }
    } else {
      setValue(value + e.target.innerText);
      const inputValue = value + e.target.innerText;
      for (let i = 0; i < inputValue.length; i += 1) {
        if (inputValue[i] === '%' || inputValue[i] === '÷' || inputValue[i] === 'x' || inputValue[i] === '-' || inputValue[i] === '+') {
          const newObj = obj;
          let value1 = '';
          for (let j = 0; j < i; j += 1) {
            value1 += inputValue[j];
            newObj.total = value1;
          }
          for (let j = i; j <= i; j += 1) {
            newObj.operation = inputValue[j];
          }
          let value2 = '';
          for (let j = i + 1; j < inputValue.length; j += 1) {
            value2 += inputValue[j];
            newObj.next = value2;
          }
          setObj(newObj);
        }
      }
    }
  }
  return (
    <div className="calculator-page-container">
      <header className="calculator-header">Simple Calculator</header>
      <main>
        <input className="calculator-input" type="text" placeholder="0" value={value} onChange={cal} />
        <div className="buttons-container">
          <button className="buttons" onClick={cal} type="button">AC</button>
          <button className="buttons" onClick={cal} type="button">+/-</button>
          <button className="buttons" onClick={cal} type="button">%</button>
          <button className="buttons orange-btn" onClick={cal} type="button">÷</button>
          <button className="buttons" onClick={cal} type="button">7</button>
          <button className="buttons" onClick={cal} type="button">8</button>
          <button className="buttons" onClick={cal} type="button">9</button>
          <button className="buttons orange-btn" onClick={cal} type="button">x</button>
          <button className="buttons" onClick={cal} type="button">4</button>
          <button className="buttons" onClick={cal} type="button">5</button>
          <button className="buttons" onClick={cal} type="button">6</button>
          <button className="buttons orange-btn" onClick={cal} type="button">-</button>
          <button className="buttons" onClick={cal} type="button">1</button>
          <button className="buttons" onClick={cal} type="button">2</button>
          <button className="buttons" onClick={cal} type="button">3</button>
          <button className="buttons orange-btn" onClick={cal} type="button">+</button>
          <button className="button-0" onClick={cal} type="button">0</button>
          <button className="buttons" onClick={cal} type="button">.</button>
          <button className="buttons orange-btn" onClick={cal} type="button">=</button>
        </div>
      </main>
    </div>
  );
}
