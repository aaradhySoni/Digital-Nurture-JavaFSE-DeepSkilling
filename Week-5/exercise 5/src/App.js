import React from 'react';
import CohortDetails from './components/CohortDetails';

const cohorts = [
  {
    id: 1,
    name: 'React Bootcamp - Batch 12',
    mentor: 'Aaradhy Sharma',
    startDate: '01-Jun-2026',
    endDate: '30-Jun-2026',
    status: 'ongoing'
  },
  {
    id: 2,
    name: 'Java Fundamentals - Batch 9',
    mentor: 'Priya Verma',
    startDate: '01-Mar-2026',
    endDate: '30-Apr-2026',
    status: 'completed'
  },
  {
    id: 3,
    name: 'Full Stack Dev - Batch 5',
    mentor: 'Rahul Mehta',
    startDate: '10-Jul-2026',
    endDate: '10-Sep-2026',
    status: 'ongoing'
  }
];

function App() {
  return (
    <div>
      <h1>Cognizant Academy - Cohort Dashboard</h1>
      {cohorts.map((cohort) => (
        <CohortDetails key={cohort.id} {...cohort} />
      ))}
    </div>
  );
}

export default App;
