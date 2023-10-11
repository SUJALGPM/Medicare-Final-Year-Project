import React from 'react';
import Appointment from '../Appointment/Appointment';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Doctor from '../Doctor/Doctor';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import FooterYou from '../../Shared/Footer/FooterYou';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Appointment></Appointment>
            <Testimonial></Testimonial>
            <Blog></Blog>
            <Doctor></Doctor>
            <Contact></Contact>
            <FooterYou ></FooterYou>
        </div>
    );
};

export default Home;