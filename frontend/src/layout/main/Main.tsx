import React from 'react';
import './Main.css';

import Calendar from '../../components/calendar/Calendar';

const Main = () => {
  return (
    <div className="main">
      <ul className="item-list">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
        <li>Item 5</li>
        <li>Item 6</li>
        <li>Item 7</li>
        <li>Item 8</li>
      </ul>
      <div className="calendar-container">
        <ul className="time-labels">
          {Array.from({ length: 19 }, (_, i) => {
            const hour = 8 + Math.floor(i / 2);
            const minute = i % 2 === 0 ? '00' : '30';
            return (
              <li key={i}>{`${hour}h${minute}`}</li>
            );
          })}
        </ul>
        <Calendar />
      </div>
    </div>
  );
}

export default Main;