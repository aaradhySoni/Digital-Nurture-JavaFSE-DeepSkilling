import React from 'react';
import CalculateScore from './components/CalculateScore';

function App() {
  return (
    <div>
      <CalculateScore
        Name="Aaradhy Sharma"
        School="Lakshmi Narain College of Technology"
        Total={450}
        goal={5}
      />
    </div>
  );
}

export default App;
