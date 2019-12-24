import React, { Fragment, useState } from 'react';
import Popup from '../layout/ui/popup';
 
const FullStack = (props) => {
  const [show, setShow] = useState({id: 0 ,show: false });

  const handleShow = (e,key) => {
    e.preventDefault();
    setShow({id : key, show: true })
  }
  const handleClose = () => setShow(false);

   return (
     <Fragment>
      <section id="fullstack" className="col-lg-10 col-md-11 col-sm-11 center-div services-icon-wrap  sec-pad-top sec-pad-bottom-xs">
        <h6> FullStack</h6>
         <p className="pad-bottom-35 wow fadeInUp word-space"> The stack is not yet full, but it is a full stack...!</p>

          <div className="row">
            <table className="fullStackTable">   
              <tbody>        
              { props.top_skills.map( (skill,key) => (
                
                  <tr key={key}>
                    <td> 
                      <a href="!#" onClick={e => handleShow(e, key)} >  
                      { skill.title }  </a>

                      <Popup 
                        key={key}
                        close={handleClose} 
                        show={show.id === key ? show.show : false}
                        skill={skill}
                      />
                    </td>
                  </tr>
                ))}
                </tbody>
            </table>
          </div>
        </section>
      </Fragment>

    )
}
 
export default FullStack