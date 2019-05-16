import React from 'react';
import {Modal , Button} from 'react-bootstrap';
import DangerButton from '../../Buttons/Danger-Button/DangerButton';
import SuccessButton from '../../Buttons/Success-Button/SuccessButton';
export default function ValidationModal(props) {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {props.text}
        </Modal.Body>
        <Modal.Footer className="space-around">
            <SuccessButton 
                text="Retour"  
                handleClick={props.handleClose}
            />
            <DangerButton 
                text="Supprimer" 
                handleClick={props.handleConfirm}
            />
        </Modal.Footer>
    </Modal>
  )
}
