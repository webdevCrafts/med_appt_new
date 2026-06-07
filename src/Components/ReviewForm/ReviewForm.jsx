// Following code has been commented with appropriate comments for your reference.
import './ReviewForm.css';

import { Link } from "react-router-dom";

// Function component for giving reviews
function ReviewForm({submittedMessage}) {
  // State variables using useState hook
    const storedMessage = sessionStorage.getItem('review');

  return (
    <>
    <section id="reviews">
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
                   <Link to="/GiveReviews">
                        <button>Give Review</button>
                   </Link>
                </td>
                <td>
                    {submittedMessage}
                </td>
            </tr>
            <tr>
                <td>2</td>
                <td>Dr.Jane Smith</td>
                <td>Dermatology</td>
                <td>
                   <Link to="/GiveReviews">
                        <button>Give Review</button>
                   </Link>
                </td>
                <td>
                   {submittedMessage}
                </td>
            </tr>
        </table>
    </section>
    </>
  );
}

export default ReviewForm;
