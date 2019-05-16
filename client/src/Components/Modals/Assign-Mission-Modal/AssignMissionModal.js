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

    handleAssign=(e)=>{
        let data = this.state;
        data.poste = parseInt(data.poste);
        data.date_debut = new Date().toJSON().slice(0,10).replace(/-/g,'/').split('/').reverse().join('/');
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
                <Form.Group onSubmit={this.handleAssign} controlId="exampleForm.ControlSelect1">
                    <Form.Label>Poste</Form.Label>
                    <Form.Control as="select" value={this.state.poste} onChange={(e)=>{
                        this.setState({
                            poste:e.target.value
                        })
                    }}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </Form.Control>
                </Form.Group>
                </Modal.Body>
                <Modal.Footer className="space-around">
                    <DangerButton
                        text="Retour"  
                        handleClick={this.props.handleClose}
                    />
                    <SuccessButton 
                        handleClick={this.handleAssign}
                        text="Assigner" 
                    />
                </Modal.Footer>
            </Modal>
        )
    }
}

