import React from 'react';
import Col from 'react-bootstrap/Col';
import moment from 'moment';


const Experience = (props) => {
    const { education } = props;

    return(
        <section id="edu_sec" className="col-lg-10 col-md-11 col-sm-11 center-div education-wrap  sec-pad">
        <h6>education</h6>
        <p className="wow fadeInUp" data-wow-duration=".4s">
            I spent 3 years learning Web Design &amp; Development, got my Bachelor degree in Communication and Applied Art and started working independently. I think one should never stop learning and go through a process of acquiring knowledge.
        </p>
        <div className="qualfication-wrap">
            {education.map((edu,key) => (
            
                <div className="qualfication first-row row">
                    <Col xs={2}>
            <span className="row-count"><span>{ key+1 }</span></span>
                    </Col>
                    <Col xs={2}>
                        <span className="yr-pers vertical-align-pad">{moment(edu.from).format('YYYY')}-{moment(edu.frtoom).format('YYYY')}</span>
                    </Col>
                    <Col xs={5}>
                        <span className="insti vertical-align-pad">{edu.school}, Vadodara</span>
                    </Col>
                    <Col xs={3}>
                        <span className="design vertical-align-pad">
                            {edu.fieldofstudy}    
                        </span>
                    </Col>
                </div>
            ))}
        </div>
    </section>
    )
}

export default Experience;