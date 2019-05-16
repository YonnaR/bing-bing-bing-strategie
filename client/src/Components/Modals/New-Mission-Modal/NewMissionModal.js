import React from 'react';
import {Modal} from 'react-bootstrap';
import AddMissionForm from '../../Forms/Add-Mission-Form/AddMissionForm'
export default function NewMissionModal(props) {
  return (
    <Modal show={true} onHide={props.handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <AddMissionForm handleCancel={props.handleClose}/>
        </Modal.Body>
    </Modal>
  )
}
