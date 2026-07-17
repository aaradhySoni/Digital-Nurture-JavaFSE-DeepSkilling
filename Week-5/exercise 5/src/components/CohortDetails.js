import React from 'react';
import styles from './CohortDetails.module.css';

function CohortDetails({ name, mentor, startDate, endDate, status }) {
  const headingColor = status === 'ongoing' ? 'green' : 'blue';

  return (
    <div className={styles.box}>
      <h3 style={{ color: headingColor }}>{name}</h3>
      <dl>
        <dt>Mentor</dt>
        <dd>{mentor}</dd>

        <dt>Start Date</dt>
        <dd>{startDate}</dd>

        <dt>End Date</dt>
        <dd>{endDate}</dd>

        <dt>Status</dt>
        <dd>{status}</dd>
      </dl>
    </div>
  );
}

export default CohortDetails;
