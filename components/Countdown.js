import React, { Component } from "react";
import cd from '../styles/countdown.module.css'

class Countdown extends Component {
  state = {
    timerOn: false,
    timerStart: 0,
    timerTime: 0
  };

  startTimer = () => {
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: this.state.timerTime
    });
    this.timer = setInterval(() => {
      const newTime = this.state.timerTime - 10;
      if (newTime >= 0) {
        this.setState({
          timerTime: newTime
        });
      } else {
        clearInterval(this.timer);
        this.setState({ timerOn: false });
        alert("Daten är slut!");
      }
    }, 10);
  };

  stopTimer = () => {
    clearInterval(this.timer);
    this.setState({ timerOn: false });
  };
  resetTimer = () => {
    if (this.state.timerOn === false) {
      this.setState({
        timerTime: this.state.timerStart
      });
    }
  };

  adjustTimer = input => {
    const { timerTime, timerOn } = this.state;
    if (!timerOn) {
      if (input === "incHours" && timerTime + 3600000 < 216000000) {
        this.setState({ timerTime: timerTime + 3600000 });
      } else if (input === "decHours" && timerTime - 3600000 >= 0) {
        this.setState({ timerTime: timerTime - 3600000 });
      } else if (input === "incMinutes" && timerTime + 60000 < 216000000) {
        this.setState({ timerTime: timerTime + 60000 });
      } else if (input === "decMinutes" && timerTime - 60000 >= 0) {
        this.setState({ timerTime: timerTime - 60000 });
      } else if (input === "incSeconds" && timerTime + 1000 < 216000000) {
        this.setState({ timerTime: timerTime + 1000 });
      } else if (input === "decSeconds" && timerTime - 1000 >= 0) {
        this.setState({ timerTime: timerTime - 1000 });
      }
    }
  };

  render() {
    const { timerTime, timerStart, timerOn } = this.state;
    let seconds = ("0" + (Math.floor((timerTime / 1000) % 60) % 60)).slice(-2);
    let minutes = ("0" + Math.floor((timerTime / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor((timerTime / 3600000) % 60)).slice(-2);

    return (
      <div className={cd.Countdown}>
        <div className={cd.CountdownLabel}>Timmar : Minuter : Sekunder</div>
        <div className={cd.CountdownDisplay}>
          <button className={cd.button} onClick={() => this.adjustTimer("incHours")}>&#8679;</button>
          <button className={cd.button} onClick={() => this.adjustTimer("incMinutes")}>
            &#8679;
          </button>
          <button className={cd.button} onClick={() => this.adjustTimer("incSeconds")}>
            &#8679;
          </button>

          <div className={cd.CountdownTime}>
            {hours} : {minutes} : {seconds}
          </div>

          <button className={cd.button} onClick={() => this.adjustTimer("decHours")}>
            &#8681;
          </button>
          <button className={cd.button} onClick={() => this.adjustTimer("decMinutes")}>
            &#8681;
          </button>
          <button className={cd.button} onClick={() => this.adjustTimer("decSeconds")}>
            &#8681;
          </button>
        </div>

        {timerOn === false && (timerStart === 0 || timerTime === timerStart) && (
          <button className={cd.button} onClick={this.startTimer}>
            Start
          </button>
        )}
        {timerOn === true && timerTime >= 1000 && (
          <button className={cd.button} onClick={this.stopTimer}>
            Stopp
          </button>
        )}
        {timerOn === false &&
          (timerStart !== 0 && timerStart !== timerTime && timerTime !== 0) && (
            <button className={cd.button} onClick={this.startTimer}>
              Fortsätt
            </button>
          )}

        {(timerOn === false || timerTime < 1000) &&
          (timerStart !== timerTime && timerStart > 0) && (
            <button className={cd.button} onClick={this.resetTimer}>
              Reset
            </button>
          )}
      </div>
    );
  }
}

export default Countdown;
