import React from 'react';
import doctor from '../../../images/doctor.png';
import './Appointment.css';
import { NavLink } from 'react-router-dom';

const Appointment = () => {
    return (
        <div className="appointment my-5 " >
            <div className="container ">
            <div className="row ">
                <div className="col-md-5 d-none d-md-block">
                    <img src={doctor} alt="" />
                </div>
                <div className="col-md-7 text-white py-5">
                    <h5 className="brand-color text-uppercase">AppointMent</h5>
                    <h1 className="">Make An AppointMent <br/> today </h1>
                    <p>An appointment is a scheduled meeting, typically in healthcare, where a patient sets a specific time to see a medical professional for consultation, treatment, or other services. It's a crucial system for organized and personalized healthcare delivery, reducing wait times, and enhancing patient care. Appointments 
                        can be made by contacting the healthcare provider's office or through online scheduling systems.  </p>
                    <button className="btn btn-primary"><NavLink to="/appointments">Learn More</NavLink></button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Appointment;