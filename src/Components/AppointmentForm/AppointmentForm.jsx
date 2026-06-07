import React, { useState } from 'react'

const AppointmentForm= ({ doctorName, doctorSpeciality, onSubmit }) => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [date, setDate] = useState(null);
    const [time, setTime] = useState(null);

    const handleDateSelection = (e) => {
        setDate(e.target.value)
      };

    const handleTimeSelection = (e) => {
        setTime(e.target.value)
    };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      const formData = {name, phoneNumber, date, time };
      sessionStorage.setItem('appointmentData', JSON.stringify(formData));
      onSubmit(formData);
      setName('');
      setPhoneNumber('');
      setDate(null);
      setTime(null);
    };
  
    return (
      <form onSubmit={handleFormSubmit} className="appointment-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={handleDateSelection}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="timeSlot">Book Time Slot:</label>
          <input
            type="time"
            id="timeSlot"
            value={time}
            onChange={handleTimeSelection}
            required
          />
        </div>
        <button type="submit">Book Now</button>
      </form>
    );
  };

export default AppointmentForm;
