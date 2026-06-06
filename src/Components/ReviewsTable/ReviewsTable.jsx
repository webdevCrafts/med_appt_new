// Following code has been commented with appropriate comments for your reference.
import React, { useState } from 'react';

import { Link } from "react-router-dom";

import './ReviewsTable.css';

// Function component for giving reviews
function ReviewsTable() {
  
  return (
    <>
    <section id='reviews'>
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
                    <Link to="/ReviewForm">
                        <button>Click Here</button>
                    </Link>
                </td>
                <td>
                    PUT REVIEW OUTPUT HERE
                </td>
            </tr>
            <tr>
                <td>2</td>
                <td>Dr.Jane Smith</td>
                <td>Dermatology</td>
                <td>
                    <Link to="/ReviewForm">
                        <button>Click Here</button>
                    </Link>
                </td>
                <td>
                    PUT REVIEW OUTPUT HERE
                </td>
            </tr>
        </table>
    </section>
    </>
  );
}

export default ReviewsTable;
