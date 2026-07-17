import React from 'react';
import ListofPlayers from './components/ListofPlayers';
import IndianPlayers from './components/IndianPlayers';

// Flag variable controlling which component is displayed
const flag = true;

function App() {
  return (
    <div>
      <h1>Cricket App</h1>
      {flag === true ? <ListofPlayers /> : <IndianPlayers />}
    </div>
  );
}

export default App;
