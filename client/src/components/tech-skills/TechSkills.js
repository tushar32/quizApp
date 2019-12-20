import React from 'react';
 
const TechSkills = (props) => {
   return (
      <div>
        <section id="tech_skills" className="col-lg-10 col-md-11 col-sm-11 center-div skills-wrap  sec-pad-top sec-pad-bottom-xs">
            <h6>technical skills</h6>
            <p className="wow fadeInUp" data-wow-duration=".4s">
                As a reluctant developer, I come across to work with various technology and explore my creativity.
                Software is more than just a tool, and I try to dig deep into it. I am always resposible to create a viable and impactful solution
                using these technologies
            </p>
            <div className="row margin-top-40">
                {props.skills.map((skill,key) => (
                    <div key={key} className="col-sm-3 margin-bottom-sm">
                        <span className="progress-cat">{skill.substr(0, skill.indexOf(":"))}</span>
                        <div className="progress-bar-graph">
                            <div className="progress-bar-wrap">
                                <div className="bar-wrap">
                                    <span data-width={skill.substr(skill.indexOf(":")+1)*10} style={{ width: skill.substr(skill.indexOf(":")+1)*10 +"%" }} >
                                    <strong style={{ opacity: 1 }}><i>{skill.substr(skill.indexOf(":")+1)}</i></strong>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                )) }
               
                <div className="clearfix"></div>
            </div>
        </section>
      </div>
    )
}
 
export default TechSkills