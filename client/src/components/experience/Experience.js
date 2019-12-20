import React from 'react';
import Col from 'react-bootstrap/Col';
import moment from 'moment';

const Experience = (props) => {
    const { experience } = props;
   return (
      <div>
        <section id="exp_sec" className="col-lg-10 col-md-11 col-sm-11 center-div experience-wrap  sec-pad">
                <h6>experience</h6>
            <div className="exp-timeline-wrap">
                { Object.keys(experience).reverse().map(key => {
                    const exp = experience[key];
                    return (

                        <div key={key} className="row exp-timeline timeline-active " style={{ height: "216px" }}>
                            <Col xs={2}>
                                <div className="timeline-st" style={{ height: "201px" }}></div>
                            </Col>
                            <Col xs={10} className="exp-content-wrap">                       
                                <div className="row wow fadeInRight" data-wow-duration=".4s" data-wow-delay="0s">
                                <Col sm={4} className="duration">
                                    <span>
                                        { moment(exp.from).format('DD-MM-YYYY') } - {exp.current ? 'Present': moment(exp.to).format('DD-MM-YYYY')}
                                    </span></Col>
                                    <Col sm={8}>
                                    <span className="job-desn">{exp.title}</span>
                                    <span className="job-loc">{exp.company}, {exp.location}
                                    </span>
                                    <p className="job-summary p-small">
                                    {exp.description}
                                    </p>
                                </Col>
                            </div>                       
                        </Col>
                </div>
                ) }) 
            }
                
            </div>
        </section>
    </div>
    )
}
 
export default Experience