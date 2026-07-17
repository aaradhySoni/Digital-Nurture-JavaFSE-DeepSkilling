import React from 'react';

const flights = [
  { id: 1, flightNo: 'AI-202', from: 'Delhi', to: 'Mumbai', time: '06:30 AM' },
  { id: 2, flightNo: 'IG-450', from: 'Bhopal', to: 'Bengaluru', time: '11:15 AM' },
  { id: 3, flightNo: 'SG-118', from: 'Mumbai', to: 'Chennai', time: '04:45 PM' }
];

function UserPage() {
  return (
    <div>
      <h2>Available Flights (Logged-in View)</h2>
      <ul>
        {flights.map((flight) => (
          <li key={flight.id}>
            {flight.flightNo}: {flight.from} to {flight.to} at {flight.time}{' '}
            <button onClick={() => alert(`Ticket booked for flight ${flight.flightNo}`)}>
              Book Ticket
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserPage;
