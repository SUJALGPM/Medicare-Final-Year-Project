import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import toast, { Toaster } from 'react-hot-toast';
import { useState } from 'react';
import { useEffect } from 'react';


const Navbar = () => {
    const [isSticky, setSticky] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        })
    }, [])
    return (
        <nav className={`navbar navbar-expand-lg navbar-light ${isSticky ? "stickynav" : "normalnav"} `} expand="lg">
            <Toaster />
            <div className="container-fluid">
                <div className="navbar-heading">
                    <h3>
                        <NavLink className="navbar-h" to="/home">MEDICARE</NavLink>
                    </h3>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav  mb-2 mb-lg-0 ms-auto ">
                        <li className="nav-item">
                            <NavLink className="nav-link me-3 textDark"  to="/home">HOME</NavLink>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link me-3 textDark" href="#serviceContaint" >SERVICES</a>
                        </li>
                        
                        <li className="nav-item">
                            <a className="nav-link me-3 textDark" href="#reviewsContaints">REVIEWS</a>
                        </li>
                        <li className="nav-item">
                            {/* <a className={`nav-link me-3 text-white ${isSticky ? "textDark" : "textWhite"}`} href="#BlogContaint">BLOG</a> */}
                            <a className="nav-link me-3 textDark" href="#BlogContaint">BLOG</a>
                        </li>
                        {/* <li className='nav-item'>
                            <a href='#ChatappPage' className='nav-link me-3 textDark' >CHATAPP</a>
                        </li> */}
                        <li className="nav-item ">
                            <a className="nav-link me-3 textDark " href="#doctorContaints">ABOUT</a>
                        </li>

                        <li className="nav-item">
                            <a href='#ContactPage' className="nav-link me-3 textDark">CONTACT</a>
                            {/* <NavLink activeClassName="ContactPage" className="nav-link me-3" to="#ContactPage">CONTACT</NavLink> */}
                        </li>





                        <div className="dropdown">

                            <li className="nav-item">
                                
                                    
                                    <span>
                                        <NavLink className={`nav-link me-3 textDark `} to="/login">LOGIN</NavLink>
                                    </span>
                                
                            </li>

                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;