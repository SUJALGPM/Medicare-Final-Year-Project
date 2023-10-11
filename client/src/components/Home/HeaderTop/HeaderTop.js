import React from 'react';
import { NavLink } from 'react-router-dom';
import headerImage from "../../../images/headerImage.jpg"

const HeaderTop = () => {
    return (
        <div style={{ height: "700px", 'width': '100%' , marginLeft :"50px"  }} className="row d-flex align-items-center container">
            <div className="col-md-4 col-sm-6 col-12 offset-md-1 md-mx-5">
                <h2>Seamless Scheduling  <br />for Your Well-Being</h2>
                <p className="text-secondary">Experience effortless healthcare appointment scheduling with our user-friendly website. We're dedicated to making medical care accessible and convenient. Our seamless interface simplifies the process, 
                so you can focus on your well-being. Your path to better health starts here.</p>
                <NavLink to="/appointments" className="btn btn-primary btn-lg shadow rounded"> GET STARTED</NavLink>

            </div>
            <div className="col-md-6 col-sm-6 col-12 " >
                <img src={headerImage} className="img-fluid rounded" alt="" />
            </div>
        </div>
    );
};

export default HeaderTop;