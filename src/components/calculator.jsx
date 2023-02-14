import React from 'react';

export default function Calculator() {
  return (
    <div>
      <header>Simple Calculator</header>
      <main>
        <input className="calculator-input" type="text" placeholder="0" />
        <div className="buttons-container">
          <button className="buttons" type="button">AC</button>
          <button className="buttons" type="button">+/-</button>
          <button className="buttons" type="button">%</button>
          <button className="buttons orange-btn" type="button">+</button>
          <button className="buttons" type="button">7</button>
          <button className="buttons" type="button">8</button>
          <button className="buttons" type="button">9</button>
          <button className="buttons orange-btn" type="button">X</button>
          <button className="buttons" type="button">4</button>
          <button className="buttons" type="button">5</button>
          <button className="buttons" type="button">6</button>
          <button className="buttons orange-btn" type="button">-</button>
          <button className="buttons" type="button">1</button>
          <button className="buttons" type="button">2</button>
          <button className="buttons" type="button">3</button>
          <button className="buttons orange-btn" type="button">+</button>
          <button className="button-0" type="button">0</button>
          <button className="buttons" type="button">.</button>
          <button className="buttons orange-btn" type="button">=</button>
        </div>
      </main>
    </div>
  );
}
