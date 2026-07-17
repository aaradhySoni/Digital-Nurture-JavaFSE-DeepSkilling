import React from 'react';
import '../stylesheets/mystyle.css';

function CalculateScore({ Name, School, Total, goal }) {
  const average = (Total / goal).toFixed(2);

  return (
    <div className="score-card">
      <h2>Student Score Card</h2>
      <p><strong>Name:</strong> {Name}</p>
      <p><strong>School:</strong> {School}</p>
      <p><strong>Total Marks:</strong> {Total}</p>
      <p><strong>Number of Subjects (goal):</strong> {goal}</p>
      <p className="average">Average Score: {average}</p>
    </div>
  );
}

export default CalculateScore;
