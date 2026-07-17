import React from 'react';

const flights = [
  { id: 1, flightNo: 'AI-202', from: 'Delhi', to: 'Mumbai', time: '06:30 AM' },
  { id: 2, flightNo: 'IG-450', from: 'Bhopal', to: 'Bengaluru', time: '11:15 AM' },
  { id: 3, flightNo: 'SG-118', from: 'Mumbai', to: 'Chennai', time: '04:45 PM' }
];

function GuestPage() {
  return (
    <div>
      <h2>Available Flights (Guest View)</h2>
      <p>Please log in to book tickets.</p>
      <ul>
        {flights.map((flight) => (
          <li key={flight.id}>
            {flight.flightNo}: {flight.from} to {flight.to} at {flight.time}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GuestPage;
