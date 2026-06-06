// Import necessary modules from React library
import React from 'react';

// Import App stylesheet
import './App.css';

// Import components for routing from react-router-dom library
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import custom LandingPage component
import LandingPage from './Components/Landing_Page/Landing_Page';

// Import custom Navbar component
import Navbar from './Components/Navbar/Navbar';

// Import custom SignUp component
import Sign_Up from './Components/Sign_Up/Sign_Up';

// Import custom Login component
import Login from './Components/Login/Login';

// Import custom Services component
import Services from './Components/Services/Services';

// Import custom Booking Consultation component
import BookingConsultation from './Components/BookingConsultation';

// Import custom Instant Consultation component
import InstantConsultation from './Components/InstantConsultationBooking/InstantConsultationBooking/InstantConsultation';  

// Import custom Appointment Notification component
import Notification from './Components/Notification/Notification';

// Import custom ReviewsForm component
import GiveReviews from './Components/ReviewForm/ReviewForm';

// Import custom Profile Form component
import ProfileForm from './Components/ProfileCard/ProfileCard';

// Function component for the main App
function App() {

  // Render the main App component
  return (
    <div className="App">
        {/* Set up BrowserRouter for routing */}
        <BrowserRouter>

          {/* Display the Navbar component on every page */}
          <Navbar/>

          {/* Display notification on every page */}
          <Notification>

            {/* Set up the Routes for different pages */}
            <Routes>
                {/* Define individual Route components for different pages */}

                    <Route path="/" element={<LandingPage/>}/>

                    <Route path="/Sign_Up" element={<Sign_Up/>}/>

                    <Route path="/Login" element={<Login/>}/>

                    <Route path="/Services" element={<Services/>}/>

                    <Route path="/BookingConsultation" element={<BookingConsultation/>}/>

                    <Route path="/InstantConsultation/InstantConsultation" element={<InstantConsultation/>}/>

                    <Route path="/ReviewForm" element={<GiveReviews/>}/>
                    
                    <Route path="/ProfileCard" element={<ProfileForm/>}/>
            </Routes>
         </Notification>
        </BrowserRouter>
    </div>
  );
}

// Export the App component as the default export
export default App;
