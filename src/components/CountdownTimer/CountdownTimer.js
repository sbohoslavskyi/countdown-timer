import React, { useState, useEffect } from "react";

import './CountdownTimer.css';

export default function CountdownTimer() {
  const [remainingTime, setRemainingTime] = useState({days: 0, hours: 0, minutes: 0, seconds: 0});
  const [intervalId, setIntervalId] = useState(0);

  useEffect(() => {
    setIntervalId(setInterval(calculateTimeRemaining, 1000));

    return () => {
      clearInterval(intervalId);
    }
  }, []);

  function calculateTimeRemaining() {
    const total = Date.parse(new Date(2021, 1, 1)) - Date.parse(new Date());
    const seconds = Math.floor( (total/1000) % 60 );
    const minutes = Math.floor( (total/1000/60) % 60 );
    const hours = Math.floor( (total/(1000*60*60)) % 24 );
    const days = Math.floor( total/(1000*60*60*24) );

    setRemainingTime({
      days,
      hours,
      minutes,
      seconds
    });
  }

  return (
    <div className="countdown-timer">
      <ul>
        <li>
          <div className="countdown-timer-item countdown-timer-item__first">
            {remainingTime.days}
          </div>
          <div className="countdown-timer-capture">Days</div>
        </li>
        <li>
          <div className="countdown-timer-item">
            {remainingTime.hours}
          </div>
          <div className="countdown-timer-capture">Hours</div>
        </li>
        <li>
          <div className="countdown-timer-item">
            {remainingTime.minutes}
          </div>
          <div className="countdown-timer-capture">Minutes</div>
        </li>
        <li>
          <div className="countdown-timer-item countdown-timer-item__last">
            {remainingTime.seconds}
          </div>
          <div className="countdown-timer-capture">Seconds</div>
        </li>
      </ul>
    </div>
  );
}
