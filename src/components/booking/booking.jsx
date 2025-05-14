import React from 'react'
import './booking.css'

function booking() {
  return (
    <div>
      <div className="container-booking">
        <div className="image"></div>
        <div className="input-form">
            <h3>The Gilded Fork</h3>
            <h1>Book A Table Online</h1>
            <div className="text-form">
                <input type="text" placeholder='Your Name'/>
                <input type="email" placeholder='Your Email'/>
                <input type="datetime-local"  placeholder='Date & Time'/>
                <input type="number" placeholder='No of people'/>
            </div>
            <textarea className='lean' placeholder='Special Request'></textarea>
            <input className='submit' type="submit" value={"BOOK NOW"}/>
        </div>
      </div>
    </div>
  )
}

export default booking
