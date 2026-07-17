import React from 'react';

// Array of 11 Indian team players (index 0 to 10)
const teamPlayers = [
  'Rohit Sharma',
  'Shubman Gill',
  'Virat Kohli',
  'KL Rahul',
  'Suryakumar Yadav',
  'Hardik Pandya',
  'Ravindra Jadeja',
  'Jasprit Bumrah',
  'Mohammed Shami',
  'Kuldeep Yadav',
  'Yashasvi Jaiswal'
];

// a) Destructuring to separate players at Odd positions (1st, 3rd, 5th...)
// and Even positions (2nd, 4th, 6th...) using array destructuring with skipped commas
const [
  oddPlayer1, evenPlayer1,
  oddPlayer2, evenPlayer2,
  oddPlayer3, evenPlayer3,
  oddPlayer4, evenPlayer4,
  oddPlayer5, evenPlayer5,
  oddPlayer6
] = teamPlayers;

const oddTeamPlayers = [oddPlayer1, oddPlayer2, oddPlayer3, oddPlayer4, oddPlayer5, oddPlayer6];
const evenTeamPlayers = [evenPlayer1, evenPlayer2, evenPlayer3, evenPlayer4, evenPlayer5];

// b) Two arrays merged using the ES6 spread (merge) feature
const T20players = ['Rohit Sharma', 'Shubman Gill', 'Virat Kohli', 'Suryakumar Yadav'];
const RanjiTrophyPlayers = ['Sarfaraz Khan', 'Yashasvi Jaiswal', 'Rinku Singh'];
const mergedPlayers = [...T20players, ...RanjiTrophyPlayers];

function IndianPlayers() {
  return (
    <div>
      <h2>Odd Position Team Players</h2>
      <ul>
        {oddTeamPlayers.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>

      <h2>Even Position Team Players</h2>
      <ul>
        {evenTeamPlayers.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>

      <h2>T20 Players</h2>
      <ul>
        {T20players.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>

      <h2>Ranji Trophy Players</h2>
      <ul>
        {RanjiTrophyPlayers.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>

      <h2>Merged Squad (T20 + Ranji Trophy)</h2>
      <ul>
        {mergedPlayers.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default IndianPlayers;
