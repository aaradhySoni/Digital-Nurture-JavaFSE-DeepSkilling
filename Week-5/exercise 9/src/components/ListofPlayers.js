import React from 'react';

// Array of 11 players with name and score
const players = [
  { id: 1, name: 'Rohit Sharma', score: 85 },
  { id: 2, name: 'Shubman Gill', score: 62 },
  { id: 3, name: 'Virat Kohli', score: 95 },
  { id: 4, name: 'KL Rahul', score: 58 },
  { id: 5, name: 'Suryakumar Yadav', score: 74 },
  { id: 6, name: 'Hardik Pandya', score: 45 },
  { id: 7, name: 'Ravindra Jadeja', score: 68 },
  { id: 8, name: 'Jasprit Bumrah', score: 30 },
  { id: 9, name: 'Mohammed Shami', score: 25 },
  { id: 10, name: 'Kuldeep Yadav', score: 40 },
  { id: 11, name: 'Yashasvi Jaiswal', score: 80 }
];

function ListofPlayers() {
  // Use map() to render the full list of players
  const allPlayers = players.map((player) => (
    <li key={player.id}>
      {player.name} - {player.score}
    </li>
  ));

  // Use an arrow function with filter() to get players scoring below 70
  const belowSeventy = players.filter((player) => player.score < 70);

  return (
    <div>
      <h2>List of Players (11 Total)</h2>
      <ul>{allPlayers}</ul>

      <h2>Players with Score Below 70</h2>
      <ul>
        {belowSeventy.map((player) => (
          <li key={player.id}>
            {player.name} - {player.score}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListofPlayers;
