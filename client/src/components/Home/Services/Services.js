import React from 'react';
import ServiceDetail from '../../../components/Home/ServiceDetail/ServiceDetail';
import chatbot from '../../../images/chatbot.jpeg';
import drAppointment from '../../../images/drApppointment.jpg';
import medical from '../../../images/medical.jpg';


const serviceData = [
    {
        name: 'Appointment scheduling',
        img: drAppointment,
        desc: 'Simplified Medical Appointments for Your Convenience'
    },
    {
        name: 'Chat Bot',
        img: chatbot,
        desc: '24/7 chatbot for instant appointment help and answers'
    },
    {
        name: 'Medical-Services',
        img: medical,
        desc: 'Effortless scheduling for specific medical services.'
    }
]

const Services = () => {
    return (
        <section className="services-container mt-5" id="serviceContaint" style={{marginBottom:"100px"}}>
            <div className="text-center">
                <h5 className="brand-color">OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center mt-5">
                <div className="w-75 row">
                    {
                        serviceData.map(service => <ServiceDetail service={service} key={service.name}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;