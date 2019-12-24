import React from 'react';
import { animateScroll as scroll } from "react-scroll";

const Footer = () => {

    const scrollToTop = () => {
        scroll.scrollToTop(); 
    };
    
    return(
    <div>
        <footer className="col-lg-10 col-md-11 col-sm-11 center-div contact-wrap  sec-pad">
            <div className="row">
                <div className="col-sm-6 available-wrap">
                    <span className="available-pointer"></span>
                    <span className="available-tag">I specially thanks to God Kabir.</span>
                </div>
                <div className="col-sm-6">
                    <div className="social-icons-wrap float-right">
                        <ul className="social-icons float-right">
                            <li>
                                <a href="https://www.facebook.com/tushar.barate.7" className="social-icon">
                                <i className="fab fa-facebook-square fa-2x"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/tushar-barate-7b010865/" className="social-icon">
                                <i className="fab fa-linkedin fa-2x"></i>
                                </a>
                            </li>
                        </ul>                    
                    </div>
                    <div className="goto-top text-right float-right">
                        <a onClick={scrollToTop} href="#body">
                        <span data-hover="top">
                        top
                        </span>
                        </a>
                    </div>
                    <div className="copywrite-wrap text-right float-right"></div>
                </div>
            </div>
        </footer>
    </div>
    )
}

export default Footer;