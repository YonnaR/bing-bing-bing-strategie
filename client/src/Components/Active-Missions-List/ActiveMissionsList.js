import React, { Component } from 'react'
import { Table } from 'react-bootstrap';
import ActiveMissionItem from './ActiveMissionItem';
import Axios from 'axios';
import ActivityIndicator from '../Activity-Indicator/ActivityIndicator';
import TitleJumbotron from '../Jumbotron/title-Jumbotron/TitleJumbotron';
import NewMissionModal from '../Modals/New-Mission-Modal/NewMissionModal';
import SuccessButton from '../Buttons/Success-Button/SuccessButton';

export default class AllMissionList extends Component {
    constructor(props){
        super(props);
        this.state={
            modalNew:false,
            isLoading:true,
            data:[], 
        }
    }
    componentDidMount(){
        Axios.get(`/actif`)
        .catch(e=>console.log(e))
        .then(res=>{
          console.log(res)
            this.setState({
                isLoading:false,
                data:res.data
            })
        });
    }
    handleShowModal=()=>{
      this.setState(state=>{
        return{
          modalNew : !state.modalNew
        }
      })
    }
    render() {
      console.log(this.state)
      const {isLoading , data , modalNew} = this.state;
      let table=data.map((k , i )=>{
          return <ActiveMissionItem key={i} data={k}/>
      })
      return (
          <div>
            {modalNew?<NewMissionModal
             title="Création de commande"
             handleClose={this.handleShowModal} 
            />:null}  
            <br/><br/>
            <TitleJumbotron text="Actif"/>
            <Table bordered responsive hover size="xs">
                <thead>
                <tr>
                    <th className="text-center">Client</th>
                    <th className="text-center">Ref</th>
                    <th className="text-center">Produit</th>
                    <th className="text-center">Nombre</th>
                    <th className="text-center">Création</th>
                    <th className="text-center">Poste</th>
                </tr>
                </thead>
                <tbody>
                    {isLoading?<ActivityIndicator/>:table}
                </tbody>
            </Table>
            <div className="center">
                <SuccessButton 
                text="Créer"
                handleClick={this.handleShowModal} />
            </div>
        </div>
      )
    }
}
