import React from 'react';
import TestimonialDetails from './TestimonialDetails';
import './Testimonial.css';

const data = [
    {
        description : "I've overcome multiple diseases through treatment and lifestyle changes. Today, I live a happy, healthy life, and I want to inspire hope in others.",
        name :"Faisal",
        address : "Mumbai"
    }, {
        description : "Exceptional care from a professional and empathetic medical team. Effective treatments and support for my chronic condition.",
        name :"Harsha",
        address : "Mulund"
    }, {
        description : "Diagnosed with a rare condition, the doctors' relentless dedication to finding a treatment plan has been life-changing.",
        name :"Sujal",
        address : "Virar"
    }, 
    {
        description : " Outstanding maternity care; staff kept me comfortable and well-informed throughout my pregnancy. A fantastic experience",
        name :"Abbas",
        address : "Mumbra"
    }, {
        description : "Complex surgery, immense gratitude for the skilled, dedicated surgical team. Recovery exceeded my expectations.",
        name :"Shreeya",
        address : "Kharghar"
    }, {
        description : " Essential rehabilitation services, with supportive, knowledgeable therapists, transformed my recovery from a major injury.",
        name :"Ravi",
        address : "Mulund"
    }
]

const Testimonial = () => {
    const baseUrl = process.env.REACT_APP_BASE_URL;
    return (
        <section className="container testimonial my-5 py-5" id="reviewsContaints">
            <div className="cointainer">
                <div className="section-header py-5">
                    <h5 className="brand-color text-uppercase">Testimonial</h5>
                    <h1>What Our Patients <br /> Says</h1>
                </div>
                <div className="card-deck ">
                    <div className="d-flex justify-content-center ">
                        <div className="row w-80 ">
                            {
                                data && data?.map(review => <TestimonialDetails key={review._id} testimonial={review}></TestimonialDetails>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;