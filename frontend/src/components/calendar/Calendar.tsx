import React from 'react';
import './Calendar.css';

const Calendar = () => {
  return (
    <div className="calendar">
    {Array.from({ length: 144 }).map((_, i) => (
        <div key={i} className="calendar-cell" />
    ))}
    </div>
  );
}

export default Calendar;