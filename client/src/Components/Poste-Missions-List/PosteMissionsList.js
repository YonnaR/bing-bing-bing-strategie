import React from 'react'
import { Table } from 'react-bootstrap';
import PosteMissionItem from './PosteMissionItem';

export default function PosteMissionsList(props) {
    console.log(`button will be disable ${props.isDisable}`) 
  return (
    <div>
        <br/><br/>
        <h2  className="text-center">Mission:</h2>
        <br/><br/>
        <Table striped responsive bordered hover size="sm">
            <thead>
            <tr>
                <th className="text-center">Client</th>
                <th className="text-center">Commande</th>
                <th className="text-center">Type</th>
                <th className="text-center">Référence</th>
                <th className="text-center">Unités</th>
                <th className="text-center">Visuels</th>
                <th className="text-center">Date</th>
                <th className="text-center">Commencer</th>
            </tr>
            </thead>
            <tbody>
            {
                props.data.map((k , i )=>{
                    if(k.actif===false&&k.date_fin===undefined){ 
                       return <PosteMissionItem key={i} isDisable={props.isDisable} data={k}/>
                    }
                })
            }
            </tbody>
        </Table>
    </div>
  )
}
