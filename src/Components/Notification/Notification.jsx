// Following code has been commented with appropriate comments for your reference.
import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';

// Function component Notification to display user notifications
const Notification = ({ children }) => {
  // State variables to manage user authentication, username, doctor data, and appointment data
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");
  const [doctorData, setDoctorData] = useState(null);
  const [appointmentData, setAppointmentData] = useState(null);
  const [showNotification, setShowNotification] = useState(false);

  // useEffect hook to perform side effects in the component
  useEffect(() => {
    // Retrieve stored username, doctor data, and appointment data from sessionStorage and localStorage
    const storedUsername = sessionStorage.getItem('email');
    const storedDoctorData = JSON.parse(localStorage.getItem('doctorData'));
    const storedAppointmentData = JSON.parse(localStorage.getItem(storedDoctorData?.name));
    // Additional Info to retrieve that I added
    const storedSelectedDate = sessionStorage.getItem('selectedDate');
    const storedSelectedSlot = sessionStorage.getItem('selectedSlot');


    const handleShow = () => {
        setShowNotification(true);
    }

    const handleHide = () => {
        setShowNotification(false);
    }

    // Set isLoggedIn state to true and update username if storedUsername exists
    if (storedUsername && storedSelectedDate && storedSelectedSlot) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
      setSelectedDate(storedSelectedDate);
      setSelectedSlot(storedSelectedSlot);
    }

    // Set doctorData state if storedDoctorData exists
    if (storedDoctorData) {
      setDoctorData(storedDoctorData);
    }

    // Set appointmentData state if storedAppointmentData exists
    if (storedAppointmentData) {
      setAppointmentData(storedAppointmentData);
    }
  }, []); // Empty dependency array ensures useEffect runs only once after initial render

  // Return JSX elements to display Navbar, children components, and appointment details if user is logged in
  return (
    <div>
      {/* Render Navbar component */}
      <Navbar ></Navbar>
      {/* Render children components */}
      {children}
      {/* Display appointment details if user is logged in and appointmentData is available */}
      {isLoggedIn && appointmentData && (
        <>
          <div className="appointment-card">
            <div className="appointment-card__content">
              {/* Display title for appointment details */}
              <h3 className="appointment-card__title">Appointment Details</h3>
              <p className="appointment-card__message">
                {/* Display doctor's name from doctorData */}
                <strong>Doctor:</strong> {doctorData?.name}
                <strong>Patient:</strong> {username}
                <strong>Appointment Date:</strong> {selectedDate}
                <strong>Appointment Time:</strong> {selectedSlot}
              </p>
              <div>
                <button onClick={handleShow}>Show Notification</button>
                {showNotification && <div className="notification">This is a notification!</div>}
                {showNotification && <button onClick={handleHide}>Hide Notification</button>}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

// Export Notification component for use in other parts of the application
export default Notification;
