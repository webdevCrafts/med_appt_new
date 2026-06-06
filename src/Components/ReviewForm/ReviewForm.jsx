// Following code has been commented with appropriate comments for your reference.
import React, { useState } from 'react';

import 'reactjs-popup/dist/index.css';
import './ReviewForm.css';

// Function component for giving reviews
function GiveReviews() {
  // State variables using useState hook
  const [showForm, setShowForm] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState('');
  const [showWarning, setShowWarning] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    review: '',
    rating: 0
  });

  // Function to handle button click event
  const handleButtonClick = () => {
    setShowForm(true);
  };

  // Function to handle form input changes
  const handleChange = (e) => {
    // Update the form data based on user input
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedMessage(formData);
    setFormData({
      name: '',
      review: '',
      rating: 0
    });
    setShowForm(false);
    // Check if all required fields are filled before submission
    if (formData.name && formData.review && formData.rating > 0) {
      setShowWarning(false);
    } else {
      setShowWarning(true);
    }
  };

  return (
    <>
    <table>
            <thead>
                <th>Serial Number</th>
                <th>Doctor Name</th>
                <th>Doctor Specialty</th>
                <th>Provide Feedback</th>
                <th>Review Given</th>
            </thead>
            <tr>
                <td>1</td>
                <td>Dr.Jiao Yang</td>
                <td>Dentist</td>
                <td>
                   
                </td>
                <td>
                    {submittedMessage.review}
                </td>
            </tr>
            <tr>
                <td>2</td>
                <td>Dr.Jane Smith</td>
                <td>Dermatology</td>
                <td>
                    BUTTON HERE
                </td>
                <td>
                   {submittedMessage.review}
                </td>
            </tr>
        </table>
    <div id='review-form'>
      <h2>Give a Review!</h2>
      <Popup trigger={<button>Click me</button>} position="right center">
      <div>This is the popup content!</div>
    </Popup>
      {!showForm ? (
        // Display button to open the form
        
        <button onClick={handleButtonClick}>Open Form</button>
      ) : (
        // Display form for giving feedback
        <form onSubmit={handleSubmit}>
          <h2>Give Your Feedback</h2>
          {/* Display warning message if not all fields are filled */}
          {showWarning && <p className="warning">Please fill out all fields.</p>}
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="review">Review:</label>
            <textarea id="review" name="review" value={formData.review} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="rating">Rating:</label>
            <input type="number" id="rating" name="rating" value={formData.rating} onChange={handleChange} min={1} max={5} />
          </div>
          {/* Submit button for form submission */}
          <button type="submit">Submit</button>
        </form>
      )}
      {/* Display the submitted message if available */}
      {submittedMessage && (
        <div>
          <h3>Submitted Message:</h3>
          <p>Name: {submittedMessage.name}</p>
          <p>Review: {submittedMessage.review}</p>
          <p>Rating: {submittedMessage.rating}</p>
        </div>
      )}
    </div>
    </>
  );
}

export default GiveReviews;
