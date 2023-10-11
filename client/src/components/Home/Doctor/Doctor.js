import React from 'react';
import './Doctor.css';
import DoctorDetail from './DoctorDetail';

const data = [
    {
        username : "Dr. Patil",
        email : "patil@gmail.com"
    }, {
        username : "Dr. Avinaash",
        email : "avinaash@gmail.com"
    }, {
        username : "Dr. Nargis",
        email : "nargis@gmail.com"
    }, {
        username : "Dr. Cudi",
        email : "cudi@gmail.com"
    },
]

const Doctor = () => {
    // const baseUrl = process.env.REACT_APP_BASE_URL;
    return (
        <section className="doctors" id="doctorContaints">
            <div className="container">
                <h1 className="brand-color text-center mb-7">Our Doctors </h1>
            </div>
            <div className=" container">
                <div className="row d-flex justify-content-center">
                {
                    data && data.map(item => <DoctorDetail key={item._id} item={item}></DoctorDetail>)
                }
                </div>
            </div>
        </section>
    );
};

export default Doctor;