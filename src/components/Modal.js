import React from 'react';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';


function ModalChange(props) {
    return (
      <Modal>
          <p>PAtienter e,f,ef,ef,e,fpez,fpzef,</p>
          <button onClick={props.onHide}>Close</button>
        
      </Modal>
    );
  }

export default ModalChange;