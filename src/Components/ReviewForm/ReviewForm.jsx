// Following code has been commented with appropriate comments for your reference.
import './ReviewForm.css';

import React, { useState, useEffect, use } from 'react';

// Function component for giving reviews
function ReviewForm() {
  // State variables using useState hook
  const [review, setReview] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);
  
  useEffect(() => {
    const storedReview = JSON.parse(sessionStorage.getItem('review'));
        // If review text exists
        if (storedReview) {
            setReview(storedReview);
        }
        if (sessionStorage.getItem('btnDisabled') === 'true') {
            console.log('btn is disbled')
            setIsDisabled(true);
        } else {
            console.log('btn is not disabled')
        }
  }, []);
  

  const handleClick = () => {
    sessionStorage.setItem('btnDisabled', true);
    window.location.href = '/givereviews';
  };

    
  
return (
    <>
    {<section id="reviews">
        <h1>Reviews</h1>
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
                        <button className='reviewBtn' onClick={handleClick} disabled={isDisabled}>Give Review</button>
                </td>
                <td class='review'>
                    {review?.review}
                    <br/>
                    {review?.rating} &#11088;
                </td>
            </tr>
            <tr>
                <td>2</td>
                <td>Dr.Jane Smith</td>
                <td>Dermatology</td>
                <td>
                        <button className='reviewBtn' onClick={handleClick} disabled={isDisabled}>Give Review</button>
                </td>
                <td class='review'>
                   {review?.review}
                   <br/>
                   {review?.rating} &#11088;
                </td>
            </tr>
        </table>
    </section>}
    </>
  );
}

export default ReviewForm;
