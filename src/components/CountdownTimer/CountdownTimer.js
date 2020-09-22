import React, { Component } from "react";

import './CountdownTimer.css';

class CountdownTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      remainTime: this.calculateTimeRemaining()
    }
  }

  componentDidMount() {
    this.intervalId = setInterval(() => { this.tick() }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  calculateTimeRemaining() {
    const total = Date.parse(new Date(2021, 1, 1)) - Date.parse(new Date());
    const seconds = Math.floor( (total/1000) % 60 );
    const minutes = Math.floor( (total/1000/60) % 60 );
    const hours = Math.floor( (total/(1000*60*60)) % 24 );
    const days = Math.floor( total/(1000*60*60*24) );

    return {
      days,
      hours,
      minutes,
      seconds
    };
  }

  tick() {
    this.setState({remainTime: this.calculateTimeRemaining()});
  }

  render() {
    return (
      <div className="countdown-timer">
        <ul>
          <li>
            <div className="countdown-timer-item countdown-timer-item__first">
              {this.state.remainTime.days}
            </div>
            <div className="countdown-timer-capture">Days</div>
          </li>
          <li>
            <div className="countdown-timer-item">
              {this.state.remainTime.hours}
            </div>
            <div className="countdown-timer-capture">Hours</div>
          </li>
          <li>
            <div className="countdown-timer-item">
              {this.state.remainTime.minutes}
            </div>
            <div className="countdown-timer-capture">Minutes</div>
          </li>
          <li>
            <div className="countdown-timer-item countdown-timer-item__last">
              {this.state.remainTime.seconds}
            </div>
            <div className="countdown-timer-capture">Seconds</div>
          </li>
        </ul>
      </div>
    );
  }
}

export default CountdownTimer;
