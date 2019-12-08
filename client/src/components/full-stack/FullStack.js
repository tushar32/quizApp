import React, { Fragment } from 'react';
 
const FullStack = (props) => {
  console.log(props.skills);
  
   return (
     <Fragment>
      <section id="services_sec" className="col-lg-10 col-md-11 col-sm-11 center-div services-icon-wrap  sec-pad-top sec-pad-bottom-xs">
        <h6> FullStack</h6>
         <p className="pad-bottom-35 wow fadeInUp word-space"> The stack is not yet full, but it is a full stack...!</p>

          <div class="row">
            <table className="fullStackTable" >           
              { props.skills.reverse().map( (skill,key) => (
                  <tr key={key}><td> { skill }</td> </tr>
                ))}
            </table>
          </div>
        </section>
      </Fragment>

    )
}
 
export default FullStack