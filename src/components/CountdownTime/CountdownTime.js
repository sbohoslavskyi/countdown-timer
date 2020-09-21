import React, { Component } from "react";
import moment from "moment";

import './CountdownTimer.css';

class CountdownTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      remainTime: this.calculateRemainTime()
    }
  }

  componentDidMount() {
    this.intervalId = setInterval(() => { this.tick() }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  calculateRemainTime() {
    return moment('01-01-2021', 'DD-MM-YYYY').subtract(new Date().getTime(), 'milliseconds');
  }

  tick() {
    this.setState({remainTime: this.calculateRemainTime()})
    console.log(this.state.remainTime.format('DD HH:mm:ss'));
  }

  render() {
    return (
      <div className="countdown-timer">
        <ul>
          <li>
            <div className="countdown-timer-item countdown-timer-item__first">
              {this.state.remainTime.format('DD')}
            </div>
            <div className="countdown-timer-capture">Days</div>
          </li>
          <li>
            <div className="countdown-timer-item">
              {this.state.remainTime.format('HH')}
            </div>
            <div className="countdown-timer-capture">Hours</div>
          </li>
          <li>
            <div className="countdown-timer-item">
              {this.state.remainTime.format('mm')}
            </div>
            <div className="countdown-timer-capture">Minutes</div>
          </li>
          <li>
            <div className="countdown-timer-item countdown-timer-item__last">
              {this.state.remainTime.format('ss')}
            </div>
            <div className="countdown-timer-capture">Seconds</div>
          </li>
        </ul>
      </div>
    );
  }
}

export default CountdownTime;
