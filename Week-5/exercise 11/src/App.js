import React from 'react';
import Counter from './components/Counter';
import WelcomeButton from './components/WelcomeButton';
import PressButton from './components/PressButton';
import CurrencyConvertor from './components/CurrencyConvertor';

function App() {
  return (
    <div>
      <h1>Event Examples App</h1>
      <Counter />
      <hr />
      <WelcomeButton />
      <hr />
      <PressButton />
      <hr />
      <CurrencyConvertor />
    </div>
  );
}

export default App;
