import React, { Component } from 'react'
import { Table } from 'react-bootstrap';
import MissionItem from './MissionItem';
import Axios from 'axios';
import ActivityIndicator from '../Activity-Indicator/ActivityIndicator';
import TitleJumbotron from '../Jumbotron/title-Jumbotron/TitleJumbotron';

export default class AllMissionList extends Component {
    constructor(props){
        super(props);
        this.state={
            limit:10,
            isLoading:true,
            data:[], 
        }
    }
    componentDidMount(){
        Axios.get(`/last/${this.state.limit}`)
        .catch(e=>console.log(e))
        .then(res=>{
            this.setState({
                isLoading:false,
                data:res.data
            })
        });
    }
    render() {
        const { isLoading , data , limit } = this.state;
        let table=data.map((k , i )=>{
            return <MissionItem  key={i} data={k}/>
        })
        return (
            <div>
                <br/><br/>
                <TitleJumbotron text="Inactif"/>
                <Table bordered responsive hover size="xs">
                    <thead>
                    <tr>
                        <th className="text-center">Client</th>
                        <th className="text-center">Ref</th>
                        <th className="text-center">Produit</th>
                        <th className="text-center">Nombre</th>
                        <th className="text-center">Création</th>
                        <th className="text-center">Poste</th>
                        <th className="text-center">Assigner</th>
                        <th className="text-center">Controles</th>
                    </tr>
                    </thead>
                    <tbody>
                        {isLoading?<ActivityIndicator/>:table}
                    </tbody>
                </Table>
            </div>
        )
    }
}
