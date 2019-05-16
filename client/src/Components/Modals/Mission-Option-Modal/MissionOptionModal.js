import React from 'react';
import {Modal , Form} from 'react-bootstrap';


export default function MissionOptionModal(props) {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <br/><br/>
            <div className="space-around">

            </div>
            <br/><br/>
        </Modal.Body>
    </Modal>
  )
}
