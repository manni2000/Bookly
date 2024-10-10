import React, { useState } from "react"; 
import TimeBar from "../FifteenMin/TimeBar/TimeBar"; 
import "./MeetingScheduler.css"; 
import { useHistory, useParams } from "react-router"; 
import validator from "validator"; 
import Moment from "react-moment"; 

function MeetingScheduler({ newDate, timeSlot, start, end }) {
  
  const [receiverName, setReceiverName] = useState(""); 
  const [mainEmail, setMainEmail] = useState(""); 
  const [message, setMessage] = useState(""); 
  const [isEmptyName, setIsEmptyName] = useState(false); 
  const [isEmptyEmail, setIsEmptyEmail] = useState(false); 

  
  const history = useHistory();

  
  const backHandler = () => {
    let path = `/user/15min/date`; 
    history.push(path); 
  };

  
  const emailChangeHandler = (e) => setMainEmail(e.target.value);

  
  const messageChangeHandler = (e) => setMessage(e.target.value);

  
  const submitHandler = (e) => {
    e.preventDefault(); 

    
    if (receiverName === "") {
      setIsEmptyName(true); 
    } else if (mainEmail === "") {
      setIsEmptyEmail(true); 
    } else {
      
      console.log("Form submitted successfully!"); 
      
    }
  };

  return (
    <div>
      <div className="outerdiv-meeting">
        {/* Left container to display the time and date information */}
        <div className="left-container-meeting">
          {/* Button to navigate back */}
          <button className="back-button" onClick={backHandler}>
            ⬅
          </button>
          {/* Displaying the time for the meeting */}
          <TimeBar time={15} />
          {/* Showing the selected time slot and date */}
          <p id="event-string-p">
            🗓️ {timeSlot}, <Moment format="MMM DD YYYY" date={newDate} />{" "}
          </p>
          {/* Displaying the timezone */}
          <p id="time-zone">🌎 India Standard Time</p>
        </div>

        {/* Form for scheduling the meeting */}
        <form method="POST" onSubmit={submitHandler} className="right-container-meeting">
          <div>
            <p className="meetingp">Enter Details</p>

            {/* Input for attendee's name */}
            <div className="input-container-meeting">
              <label className="meeting-label">Name *</label>
              <input
                className={isEmptyName ? "input-meeting-error" : "input-meeting"}
                value={receiverName} 
                name="receiverName"
                onChange={(e) => setReceiverName(e.target.value)} 
              ></input>
              {/* Error message if the name is empty */}
              <div className={isEmptyName ? "input-meeting-error-hidden" : "display-none"}>
                Can't be blank.
              </div>
            </div>

            {/* Input for attendee's email */}
            <div className="input-container-meeting">
              <label className="meeting-label">Email *</label>
              <input
                className={isEmptyEmail ? "input-meeting-error" : "input-meeting"}
                type="email"
                value={mainEmail} 
                name="mainEmail"
                onChange={emailChangeHandler} 
              ></input>
              {/* Error message if the email is empty */}
              <div className={isEmptyEmail ? "input-meeting-error-hidden" : "display-none"}>
                Can't be blank.
              </div>
            </div>

            {/* Optional message to share additional information */}
            <div>
              <label className="meeting-label">Please share anything that will help prepare for our meeting.</label>
              <textarea
                className="textarea-meeting"
                value={message} 
                onChange={messageChangeHandler} 
                placeholder="Share details for the meeting"
              ></textarea>
            </div>

            {/* Submit button to schedule the event */}
            <button type="submit" className="schedule-event-button">
              Schedule Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MeetingScheduler;
