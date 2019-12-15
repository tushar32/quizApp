import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Experience = (props) => {
   return (
      <div>
        <section id="exp_sec" className="col-lg-10 col-md-11 col-sm-11 center-div experience-wrap  sec-pad">
							<h6>experience</h6>
            <div className="exp-timeline-wrap">
                { props.experience.map(exp => ( 
                    <div className="row exp-timeline timeline-active" style={{ height: "216px" }}>
                    <Col xs={2}>
                        <div className="timeline-st" style={{ height: "201px" }}></div>
                    </Col>
                    <Col xs={10} className="exp-content-wrap">                       
                        <div className="row wow fadeInRight" data-wow-duration=".4s" data-wow-delay="0s">
                            <Col sm={4} className="duration"><span>{exp.from.getMonth()} - {exp.to == null ? 'Persent': exp.to}</span></Col>
                                <Col sm={8}>
                                <span className="job-desn">UI Developer</span>
                                <span className="job-loc">Fakebook Studio, New York
                                </span>
                                <p className="job-summary p-small">In this small yet expanding company, I had the opportunity to turn my passion for the web in a job right after graduation. Being the only designer in the company I have often dealt with the whole process of designing for our customers.</p>
                            </Col>
                        </div>                       
                    </Col>
                </div>
                )) }
                
            </div>
        </section>
    </div>
    )
}
 
export default Experience