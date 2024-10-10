import React, { useState } from "react";
import TimeBar from "../TimeBar/TimeBar";
import { useHistory } from "react-router";
import "./SelectedDate.css";
import "../Calendar/CalendarReact.css";
import Calendar from "react-calendar";
import Moment from "react-moment";

function SelectedDate({ time, setNewDate, newDate, setTimeSlot, start, end }) {
  const [clicked, setClicked] = useState(false);

  const history = useHistory();

  const selectedDateSetHandler = (e) => {
    let path = `/user/15min/date`;
    history.push(path);
  };

  const meetingScheduleHandler = (e) => {
    let path = `/user/15min/date/meeting`;
    history.push(path);
  };

  const backHandler = () => {
    let path = `/user/15min`;
    setNewDate(new Date());
    history.push(path);
  };

  return (
    <div>
      <div className="outerdiv-selectedDate">
        <div className="left-container-selectedDate">
          <button className="back-button" onClick={backHandler}>
            ⬅
          </button>
          <TimeBar time={15} />
        </div>

        <div className="right-container-selectedDate">
          <div>
            <h2 id="bottom-h2-date">Select a Date & Time</h2>
            <div>
              <Calendar
                activeStartDate={newDate}
                selectRange={false}
                minDate={newDate}
                onClickDay={setNewDate}
                onChange={selectedDateSetHandler}
              />
            </div>
          </div>
        </div>

        <div className="rightmost-popup-selectedDate">
          <div>
            <div className="selected-date">
              <div id="momentDate-selectedDate">
                <Moment format="MMM DD YYYY" date={newDate} />
              </div>
            </div>
            <div
              className="button-container"
              onClick={(e) => setClicked(e.target.value)}
            >
              <div>
                <button
                  className={clicked === "9" ? "newSetTime" : "setTime"}
                  value="9"
                  name="9:00am - 9:15am"
                  data-start="9:00"
                  data-end="9:15"
                  onClick={setTimeSlot}
                >
                  9:00am
                </button>
                <button
                  className={clicked === "9" ? "available-onClick" : "display-none"}
                  onClick={meetingScheduleHandler}
                >
                  Confirm
                </button>
              </div>

              <div>
                <button
                  className={clicked === "9.15" ? "newSetTime" : "setTime"}
                  value="9.15"
                  name="9:15am - 9:30am"
                  data-start="9:15"
                  data-end="9:30"
                  onClick={setTimeSlot}
                >
                  9:15am
                </button>
                <button
                  className={clicked === "9.15" ? "available-onClick" : "display-none"}
                  value="9.15"
                  onClick={meetingScheduleHandler}
                >
                  Confirm
                </button>
              </div>

              {/* Repeat the blocks with the rest of the time slots, replacing `==` with `===` */}
              
              <div>
                <button
                  className={clicked === "10" ? "newSetTime" : "setTime"}
                  value="10"
                  name="10:00am - 10:15am"
                  data-start="10:00"
                  data-end="10:15"
                  onClick={setTimeSlot}
                >
                  10:00am
                </button>
                <button
                  className={clicked === "10" ? "available-onClick" : "display-none"}
                  value="10"
                  onClick={meetingScheduleHandler}
                >
                  Confirm
                </button>
              </div>

              {/* Continue with similar blocks for other time slots */}
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectedDate;
