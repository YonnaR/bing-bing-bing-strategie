import React from 'react';
import {Spinner} from 'react-bootstrap';


export default function ActivityIndicator() {
  return (
    <div className="center" style={{heigth:"135px"}}>
        <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
        </Spinner>
    </div>
  )
}
