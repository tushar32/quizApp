import React,{ Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../../css/style.css';

const FrontNavbar = () => {
        
    return (
        <nav className="navbar navbar-default vertical-nav" role="navigation">
        <div className="navbar-header">
            <button type="button" class="btn btn-default navbar-toggle" data-toggle="collapse" data-target="#navbar_collapse">
                <span className="mask"></span>
                <span className="btn-label">
                    <span className="pe-7s-menu"></span>
                </span>
            </button>
        </div>
            <div className="collapse navbar-collapse" id="navbar_collapse">
                <ul className="nav navbar-nav">
                    <li className="active">
                        <Link to="/about"><span> About </span></Link>
                    </li>
                    <li className="">
                        <a data-scroll="" href="#services_sec">
                            <span>services</span></a>
                    </li>
                    <li className=""><a data-scroll="" href="#skill_sec"><span>Full Stack</span></a><span>Full Stack</span></li>
                    <li><a data-scroll="" href="#work_sec"><span>Other Skills</span></a><span>Other Skills</span></li>
                    <li><a data-scroll="" href="#edu_sec"><span>education</span></a><span>education</span></li>
                    <li><a data-scroll="" href="#exp_sec"><span>experience</span></a><span>experience</span></li>
                    <li><a data-scroll="" href="#client_sec"><span>clients</span></a><span>clients</span></li>
                    <li><a data-scroll="" href="#achivement_sec"><span>achivements</span></a><span>achivements</span></li>
                    <li><a data-scroll="" href="#contact_sec"><span>contact</span></a><span>contact</span></li>
                </ul>
            </div>
        </nav>
    )
}

export default FrontNavbar;