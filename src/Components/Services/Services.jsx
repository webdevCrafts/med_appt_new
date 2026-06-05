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
                                    <img src="https://cdn.pixabay.com/photo/2020/12/18/00/43/doctor-5840874_1280.png" alt="doctor giving medical advice" />
                                        <span>Instant Consultation</span>
                                </div>
                            </Link>
                        
                        
                            <Link to="/">
                                <div className="service book-appointment">
                                    <img src="https://cdn.pixabay.com/photo/2020/08/03/09/39/medical-5459631_1280.png" alt="doctor holding a patient's profile info with a plus sign" />
                                        <span>Book an Appointment</span>
                                </div>
                            </Link>
                        
                        
                            
                            <Link to="/">
                                <div className="service self-checkup">
                                    <img src="https://cdn.pixabay.com/photo/2020/08/03/09/43/medical-5459650_1280.png" alt="woman interacting with her medical status info" />
                                        <span>Self-Checkup</span>
                                </div>
                            </Link>
                        
                        
                            
                            <Link to="/">
                                <div className="service health-tips">
                                    <img src="https://cdn.pixabay.com/photo/2020/08/03/09/43/medical-5459654_1280.png" alt="doctor holding a shield with a medical cross" />
                                        <span>Health Tips & Guidance</span>
                                </div>
                            </Link>
                        
                    </div>
        </section>
    </>
  );
};

export default Services;


