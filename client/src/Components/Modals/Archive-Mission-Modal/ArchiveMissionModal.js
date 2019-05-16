import React, { Component } from 'react'
import {Modal , Form} from 'react-bootstrap';
import DangerButton from '../../Buttons/Danger-Button/DangerButton';
import SuccessButton from '../../Buttons/Success-Button/SuccessButton';
import Axios from 'axios';


export default class AssignMissionModal extends Component {
    constructor(props){
        super(props);
        this.state={
            poste:1
        }
    }
    componentDidMount(){
        this.setState(()=>{
            return this.props.data
        })
    }

    handleArchive=(e)=>{
        let data = this.state;
        data.visible = false;
        data.active = false;
        data.date_fin = new Date().toJSON().slice(0,10).replace(/-/g,'/').split('/').reverse().join('/');
        data.date_debut = data.date_debut!==undefined? data.date_debut : data.date_fin
        Axios.put(`/${data._id}`,data)
        .then(res=>{
            console.log(res);
        })
        .catch(e=>{
            console.log(e);
        })
        .finally(()=>{
            window.location.reload();
        })
    }
    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>{this.props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h3>Êtes-vous sur de vouloir archiver la mission? elle sera toujours stockée mais invisible sur le tableau de bord </h3>
                </Modal.Body>
                <Modal.Footer className="space-around">
                    <DangerButton
                        text="Retour"  
                        handleClick={this.props.handleClose}
                    />
                    <SuccessButton 
                        handleClick={this.handleArchive}
                        text="Archiver" 
                    />
                </Modal.Footer>
            </Modal>
        )
  }
}

