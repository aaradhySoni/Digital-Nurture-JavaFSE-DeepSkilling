import React from 'react';

// Single office object with Name, Rent, Address
const office = {
  name: 'Cognizant Business Hub',
  rent: 55000,
  address: 'DB City, Arera Hills, Bhopal, MP'
};

// List of office space objects to loop through
const officeSpaces = [
  { id: 1, name: 'Tech Park Tower', rent: 45000, address: 'Hinjewadi, Pune' },
  { id: 2, name: 'Skyline Business Center', rent: 72000, address: 'Whitefield, Bengaluru' },
  { id: 3, name: 'Corporate Square', rent: 58000, address: 'Gachibowli, Hyderabad' },
  { id: 4, name: 'Metro Office Suites', rent: 91000, address: 'BKC, Mumbai' },
  { id: 5, name: 'Riverside Workspace', rent: 39000, address: 'MG Road, Indore' }
];

function App() {
  return (
    <div>
      {/* Element to display the heading */}
      <h1>Office Space Rental Listings</h1>

      {/* Attribute to display the image of the office space */}
      <img
        src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=400"
        alt="Office Space"
        width="400"
      />

      {/* Object of office to display Name, Rent and Address using JSX expressions */}
      <h2>Featured Office</h2>
      <p>Name: {office.name}</p>
      <p style={{ color: office.rent < 60000 ? 'red' : 'green' }}>
        Rent: Rs. {office.rent}
      </p>
      <p>Address: {office.address}</p>

      {/* List of objects looped through to display more data */}
      <h2>All Available Office Spaces</h2>
      <ul>
        {officeSpaces.map((space) => (
          <li key={space.id}>
            <strong>{space.name}</strong> - {space.address} -{' '}
            <span style={{ color: space.rent < 60000 ? 'red' : 'green' }}>
              Rs. {space.rent}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
