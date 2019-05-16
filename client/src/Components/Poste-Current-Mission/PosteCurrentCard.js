import React from 'react';
import {Card} from 'react-bootstrap';
import DangerButton from '../Buttons/Danger-Button/DangerButton';
import SuccessButton from '../Buttons/Success-Button/SuccessButton';


export default function PosteCurrentCard(props) {
  return (
    <Card className="text-center">
        <Card.Header>Poste Numéro: {props.posteID}</Card.Header>
        <Card.Body>
            <Card.Title>
                Mission : <strong> {props.data.commande} </strong> pour <strong>{ props.data.client} </strong> </Card.Title>
            <Card.Text>
              Débuté le {props.data.date_debut}
            </Card.Text>
            <div className="space-around">
              <DangerButton text="Pause" handleClick={props.handlePauseMission} />
              <SuccessButton text="Terminer" handleClick={props.handleEndMission} />
            </div>
        </Card.Body>
        <Card.Footer className="text-muted">Type : { props.data.produit} </Card.Footer>
        <Card.Footer className="text-muted">Unitées : {  props.data.commande} </Card.Footer>
    </Card>
  )
}
