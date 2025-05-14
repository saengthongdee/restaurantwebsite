import React from "react";
import "./booking.css";

function booking() {
  return (
    <div>
      <div className="container-booking">
        <div className="image"></div>
        <div className="input-form">
          <h3>The Gilded Fork</h3>
          <h1>Book A Table Online</h1>
          <form>
            <div className="text-form">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <input type="datetime-local" placeholder="Date & Time" required />
              <input type="number" placeholder="No of people" required />
            </div>
            <textarea className="lean" placeholder="Special Request"></textarea>
            <input className="submit" type="submit" value={"BOOK NOW"} />
          </form>
        </div>
      </div>
    </div>
  );
}

export default booking;
