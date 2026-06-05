import React from "react";
import { Link } from "react-router-dom";

import "./Services.css";


export function Services () {
   
  return (
    <> 
        <section id="services">
            <h1>Our Services</h1>
                <div id="text-container">
                    <p>Utlitize any of these resources with ease based on your needs.</p>
                </div>
                    <div id="services-container">
                        
                            
                            <Link to="/InstantConsultation/InstantConsultation">
                                <div className="service instant-consultation">
                                    <span className="badge members">Members Only &#x1F512;</span>
                                        <img src="https://cdn.pixabay.com/photo/2020/12/18/00/43/doctor-5840874_1280.png" alt="doctor giving medical advice" />
                                            <h2>Instant Consultation</h2>
                                </div>
                            </Link>
                         
                        
                            <Link to="/">
                               <div className="service book-appointment">
                                    <span className="badge members">Members Only &#x1F512;</span>
                                        <img src="https://cdn.pixabay.com/photo/2020/08/03/09/39/medical-5459631_1280.png" alt="doctor holding a patient's profile info with a plus sign" />
                                            <h2>Book an Appointment</h2>
                                </div>
                            </Link>
                        
                        
                            
                            <Link to="/">
                                <div className="service self-checkup">
                                    <span className="badge">Free</span>
                                        <img src="https://cdn.pixabay.com/photo/2020/08/03/09/43/medical-5459650_1280.png" alt="woman interacting with her medical status info" />
                                            <h2>Self-Checkup</h2>
                                </div>
                            </Link>
                        
                         
                            
                            <Link to="/">
                               <div className="service health-tips">
                                    <span className="badge">Free</span>
                                        <img src="https://cdn.pixabay.com/photo/2020/08/03/09/43/medical-5459654_1280.png" alt="doctor holding a shield with a medical cross" />
                                            <h2>Health Tips & Guidance</h2>
                                </div>
                            </Link>
                        
                    </div>
        </section>
    </>
  );
};

export default Services;


