import React from 'react'
import {Jumbotron , Button} from 'react-bootstrap'
export default function TitleJumbotron(props) {
    return (
        <Jumbotron fluid>
            <h3 className="text-center">{props.text}</h3>
        </Jumbotron>
    )
}
