import React from 'react';
import { Link } from "react-scroll";
import '../../css/style.css';

const FrontNavbar = () => {
        
    return (
        <nav className="navbar navbar-default vertical-nav" role="navigation">
        <div className="navbar-header">
            <button type="button" className="btn btn-default navbar-toggle" data-toggle="collapse" data-target="#navbar_collapse">
                <span className="mask"></span>
                <span className="btn-label">
                    <span className="pe-7s-menu"></span>
                </span>
            </button>
        </div>
            <div className="collapse navbar-collapse" id="navbar_collapse">
                <ul className="nav navbar-nav">
                    <li>
                        <Link
                            activeClass="active"
                            to="intro_content_sec"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {500}
                            ><span> about </span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="fullstack"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {500}
                        ><span> Full Stack </span></Link>
                    </li>
                    <li>     
                        <Link
                            activeClass="active"
                            to="tech_skills"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {500}
                        ><span> Tech Skills </span></Link>
                    </li>
                    <li> <Link
                            activeClass="active"
                            to="exp_sec"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {500}
                        ><span> Experience </span></Link>
                    </li>
                    <li> <Link
                            activeClass="active"
                            to="edu_sec"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {500}
                        ><span> Education </span></Link>
                    </li>
                    <li>
                    <Link
                            activeClass="active"
                            to="contact_sec"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {500}
                        ><span> Contact </span></Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default FrontNavbar;