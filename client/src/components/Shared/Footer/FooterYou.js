import React from 'react';
import {FaInstagram , FaFacebookF} from "react-icons/fa"
import {RxTwitterLogo} from "react-icons/rx"

import './FooterYou.css';


const FooterYou = () =>{
    return(
        <div className='footer'>
            <div className='sb_footer section_padding'>
                <div className='sb_footer_links'>
                    <div className='sb_footer-links_div'>
                        <h4> PRODUCT </h4>
                        <a href='/'>
                            <p>Home</p>
                        </a>
                        <a href='#BlogContaint'>
                            <p>Blog</p>
                        </a>
                        <a href='#serviceContaint'>
                            <p> Services</p>
                        </a>
                        <a href='#reviewsContaints'>
                            <p> Testimonial </p>
                        </a>
                        <a href='/Chat app'>
                            <p>ChatApp</p>
                        </a>
                    </div>
                    <div className='sb_footer-links_div'>
                        <h4>RESOURCES</h4>
                        <a href='/appointments'>
                            <p>Appointment Scheduling Tools</p>
                        </a>
                        <a href='/chatbot'>
                            <p>Healthcare FAQ's</p>
                        </a>
                        <a href='/chatbot'>
                            <p>Health and Wellness Tips</p>
                        </a>
                    </div>
                    <div className='sb_footer-links_div'>
                        <h4>CONTACT US</h4>
                        <a href='/contact'>
                            <p> 
                                Medicare Website
                                near station Virar
                            </p>  
                        </a>
                        <a href='faisalkhanisrar@gmail.com'>
                            <p> 
                                contact@Medicare.com
                            </p>  
                        </a>
                        <a href='/policy'>
                            <p> 
                                Privacy policy
                            </p>  
                        </a>
                        <a href='/terms'>
                            <p> 
                                Terms of use
                            </p>  
                        </a>
                    </div>
                    <div className='sb_footer-links_div'>
                        <h4>COMING SOON ON</h4>
                        <div className='socialmedia' style={{height:"100px",width:"100px"}}>
                            <a href='https://www.facebook.com/' target='_blank'><FaFacebookF size="25px"/></a>
                            <a href='https://twitter.com/' target='_blank'><RxTwitterLogo size="25px"/></a>
                            <a href='https://www.instagram.com/' target='_blank'><FaInstagram size="25px"/></a>
                        </div>
                    </div>
                </div>

                <hr></hr>
                <div className='sb_footer-below'>
                    <div className='sb_footer-copyright'>
                        <p>
                            @{new Date().getFullYear()} CodeInn. All rights Reserved.
                        </p>
                    </div>
                    <div className='sb_footer-below-links'>
                        <a href='/terms'><div><p>Terms & Conditions</p></div></a>
                        <a href='/privacy'><div><p>Privacy</p></div></a>
                        <a href='/security'><div><p>Security</p></div></a>
                        <a href='/cookie'><div><p>Cookie Description</p></div></a>
                    </div>
                </div>
                

            </div>

        </div>
    )
}
export default FooterYou;