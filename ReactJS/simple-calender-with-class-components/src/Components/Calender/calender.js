import React from "react";
import moment from "moment";
import "./calendar.css";

export default class Calender extends React.Component {
  constructor(props) {
    super(props);
    this.width = props.width || "350px";
    this.style = props.style || {};
  }

  state = {
    dateContext: moment(),
    today: moment(),
    showMonthPopup: false,
    showYearPopup: false
  };

  weekdays = moment.weekdays(); //["Sunday","Monday", ..]
  weekdaysShort = moment.weekdaysShort(); //["Sun", "Mon", ..]
  months = moment.months();

  year = () => {
    return this.state.dateContext.format("Y");
  };

  month = () => {
    return this.state.dateContext.format("MMMM");
  };

  daysInMonth = () => {
    return this.state.dateContext.daysInMonth();
  };

  currentDate = () => {
    return this.state.dateContext.get("date");
  };

  currentDay = () => {
    return this.state.dateContext.format("D");
  };

  firstDayOfMonth = () => {
    let dateContext = this.state.dateContext;
    // Day of week 0 ... 1..5 ... 6
    let firstDay = moment(dateContext).startOf("month").format("d");
    return firstDay;
  };

  render() {
    //Map the weekends, for example, Sun, Mon, etc. as <td>
    let weekdays = this.weekdaysShort.map((day) => {
      return (
        <td key={day} className="week-day">
          {day}
        </td>
      );
    });

    // Render blanks to keep the correct calender day structure
    let blanks = [];
    for (let i = 0; i < this.firstDayOfMonth(); i++) {
      blanks.push(<td className="emptySlot">{""}</td>);
    }

    console.log("blanks: ", blanks);

    let daysInMonth = [];
    for (let days = 1; days <= this.daysInMonth(); days++) {
      let className = days === this.currentDate() ? "day current-day" : "day";
      daysInMonth.push(
        <td key={days} className={className}>
          <span>{days}</span>
        </td>
      );
    }

    console.log("days: ", daysInMonth);

    // Render the whole calender
    var totalSlots = [...blanks, ...daysInMonth];
    console.log("Totalslots: ", totalSlots); //gathers all objects in one

    let rows = []; // Spalten
    let cells = []; // Zeilen

    totalSlots.forEach((row, i) => {
      //console.log("row: ", row, "i: ", i, "i%7: ",i % 7);
      console.log(i);
      if (i % 7 !== 0) {
        // mehr als 7 spaltern kommt eine neue Reihe hinzu
        cells.push(row);
      } else {
        let insertRow = cells.slice();
        console.log(insertRow);
        rows.push(insertRow);
        cells = [];
        cells.push(row);
      }
      if (i === totalSlots.length - 1) {
        let insertRow = cells.slice();
        rows.push(insertRow);
      }
    });

    let trElements = rows.map((d, i) => {
      return <tr key={i * 100}>{d}</tr>;
    }); // initinal values to avoid errors

    return (
      <div className="calender-container">
        <table className="calender">
          <thead>
            <tr className="calender-header"></tr>
          </thead>
          <tbody>
            <tr>{weekdays}</tr>
            {trElements}
          </tbody>
        </table>
      </div>
    );
  }
}
