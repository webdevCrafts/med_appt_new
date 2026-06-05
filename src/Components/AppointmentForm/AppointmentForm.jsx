import React, { useState } from 'react'

const AppointmentForm= ({ doctorName, doctorSpeciality, onSubmit }) => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedSlot, setSelectedSlot] = useState(null);
  
    const handleDateSelection = (date) => {
      const date = new Date();
      const formattedDate = date.toISOString().slice(0, 10);
      date.value = formattedDate;
      setSelectedDate(form);
    };

    const handleSlotSelection = (slot) => {
      setSelectedSlot(slot);
    };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      onSubmit({ name, phoneNumber, selectedSlot, selectedDate });
      setName('');
      setPhoneNumber('');
      setSelectedDate(null);
      setPhoneNumber(null);
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
            value={selectedDate}
            onChange={handleDateSelection}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="timeSlot">Book Time Slot:</label>
          <input
            type="time"
            id="timeSlot"
            value={selectedSlot}
            onChange={handleSlotSelection}
            required
          />
        </div>
        <button type="submit">Book Now</button>
      </form>
    );
  };

export default AppointmentForm;
