import React, { Component } from 'react';
import { Form , Col , Row } from 'react-bootstrap';
import SuccessButton from '../../Buttons/Success-Button/SuccessButton';
import DangerButton from '../../Buttons/Danger-Button/DangerButton';
import Axios from 'axios';



export default class AddMissionForm extends Component {
    constructor(props){
        super(props);
        this.state = { 
            client:"",
            unite:0,
            visuel:0,
            produit:"",
            type:"Tee-Shirt",
            commande:""
        };
    }

    handleCreate=()=>{
        const { client, unite, visuel, produit, type, commande} = this.state;
        if(client===""){
            alert("error 1");
        }else if(parseInt(unite)===0){
            alert("error 2");
        }else if(parseInt(visuel)===0){
            alert("error 3");
        }else if(produit===""){
            alert("error 4");
        }else if(type===""){
            alert("error 5");
        }else if(commande ===""){
            alert("error 6");
        }else{
            Axios.post('/', this.state)
            .then((res)=>{
                window.location.reload()
            })
            .catch(e=>{
                alert(e)
            })
        }
    }


  render() {
      console.log(this.state)
    const { client, unite, visuel, produit, type, commande} = this.state;
    return (
        <div>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Client</Form.Label>
                    <Form.Control value={client} onChange={e=>{
                        this.setState({
                            client:e.target.value
                        })
                    }} type="text" placeholder="Nom du Client" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Référence</Form.Label>
                    <Form.Control value={commande} onChange={e=>{
                        this.setState({
                            commande:e.target.value
                        })
                    }} type="text" placeholder="Reference Commande" />
                </Form.Group>
            </Form.Row>


            <Form.Group controlId="formGridAddress1">
                <Form.Label>Référence Produit</Form.Label>
                <Form.Control type="text" onChange={e=>{
                        this.setState({
                            produit:e.target.value
                        })
                    }} value={produit} placeholder="Référence Produit" 
                />
            </Form.Group>

            <Form.Group controlId="formGridAddress1">
                <Form.Label>Unitées</Form.Label>
                <Form.Control type="number" onChange={e=>{
                        this.setState({
                            unite:e.target.value
                        })
                    }} value={unite} placeholder="Unitées" />
            </Form.Group>

            <Form.Group controlId="formGridAddress1">
                <Form.Label>Nombre de Visuels</Form.Label>
                <Form.Control type="number" onChange={e=>{
                        this.setState({
                            visuel:e.target.value
                        })
                    }} value={visuel} placeholder=" Nombre de Visuels" />
            </Form.Group>

            <Form.Group controlId="formGridAddress2">
                <Form.Label>Type</Form.Label>
                <Form.Control as="select" value={type} onChange={(e)=>{
                    this.setState({
                        type:e.target.value
                    })
                    }}>
                    <option value="Tee-Shirt">Tee-Shirt</option>
                    <option value="Sac">Sac</option>
                </Form.Control>
            </Form.Group>

            <div className="space-around">
                <DangerButton
                    text="Annuler"
                    handleClick={this.props.handleCancel}
                />
                <SuccessButton
                    text="Créer"
                    handleClick={this.handleCreate}
                />
            </div>
        </div>
    )
  }
}
