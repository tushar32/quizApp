import React from 'react';
import Modal from 'react-bootstrap/Modal'

const Popup = (props) => {
  
   return (
      <div>
        <Modal size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered show={props.show} onHide={props.close}>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">{ props.skill.title }</Modal.Title>
          </Modal.Header>
          <Modal.Body>{ props.skill.description }</Modal.Body>
      </Modal>
       
      </div>
    )
}
 
export default Popup