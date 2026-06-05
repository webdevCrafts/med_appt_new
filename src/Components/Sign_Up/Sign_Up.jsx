// Following code has been commented with appropriate comments for your reference.
import React, { useState } from 'react';
import './Sign_Up.css'
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../config.js';

// Function component for Sign Up form
const Sign_Up = () => {
    // State variables using useState hook
    const [role, setRole] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [showerr, setShowerr] = useState(''); // State to show error messages
    const navigate = useNavigate(); // Navigation hook from react-router

    // Function to handle form submission
    const register = async (e) => {
        e.preventDefault(); // Prevent default form submission

        // API Call to register user
        const response = await fetch(`${API_URL}/api/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                role: role,
                name: name,
                email: email,
                password: password,
                phone: phone,
            }),
        });

        const json = await response.json(); // Parse the response JSON

        if (json.authtoken) {
            // Store user data in session storage
            sessionStorage.setItem("auth-token", json.authtoken);
            sessionStorage.setItem("role", role);
            sessionStorage.setItem("name", name);
            sessionStorage.setItem("phone", phone);
            sessionStorage.setItem("email", email);
            sessionStorage.setItem("password", password);

            // Redirect user to home page
            navigate("/");
            window.location.reload(); // Refresh the page
        } else {
            if (json.errors) {
                for (const error of json.errors) {
                    setShowerr(error.msg); // Show error messages
                }
            } else {
                setShowerr(json.error);
            }
        }
    };

    // JSX to render the Sign Up form
    return (
        <div className="container" style={{marginTop:'5%'}}>
            <div className="signup-grid">
                <div className="signup-text"> 
                    <h1>Sign Up</h1>
                </div>
                <div className="signup-text1"> 
                    Already a member? <span><Link to="/Login" style={{color: '#2190FF'}}> <strong>Login</strong></Link></span>
                </div>
                <div className="signup-form">
                    <form method="POST" onSubmit={register}>
                        <div className="form-group">
                            <div id="helpId">Input field for user info collection</div>
                            <label for="role">Role</label>
                                <select onChange={(e) => setRole(e.target.value)} name="role" id="role" className="form-control" aria-describedby="helpId" required multiple>
                                    <option value="select role" disabled>Select Role</option>
                                    <option value="doctor">Doctor</option>
                                    <option value="patient">Patient</option>
                                </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input value={name} type="text" onChange={(e) => setName(e.target.value)} name="name" id="name" className="form-control" pattern="[a-zA-Z ]{1,15}" title="must only be letters" placeholder="Enter your name" aria-describedby="helpId" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" className="form-control" pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" title="must be valid email format" placeholder="Enter your email" aria-describedby="helpId" />
                            {showerr && <div className="err" style={{ color: 'red' }}>{showerr}</div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" name="phone" id="phone" className="form-control" pattern=".{10}" title="must be 10 characters digits long" placeholder="Enter your phone number" aria-describedby="helpId" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} name="password" id="password" className="form-control" pattern="(?=.*\d)(?=.*[a-zA-Z]).{8,}" title="must be at least 8 chars long and has numbers and letters" placeholder="Enter your password" aria-describedby="helpId" />
                        </div>

                        <div className="btn-group"> 
                            <button className="btn btn-primary mb-2 mr-1 waves-effect waves-light">Submit</button> 
                            <button className="btn btn-danger mb-2 waves-effect waves-light">Reset</button>  
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
}

export default Sign_Up; // Export the Sign_Up component for use in other components
