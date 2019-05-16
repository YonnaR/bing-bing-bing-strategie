import React, { Component } from 'react'
import {Card} from 'react-bootstrap';
import SuccessButton from '../Buttons/Success-Button/SuccessButton'
import DangerButton from '../Buttons/Danger-Button/DangerButton';
import Axios from 'axios';
import ActivityIndicator from '../Activity-Indicator/ActivityIndicator';
import { isUndefined } from 'util';




export default class PosteCurrentMission extends Component {
  constructor(props){
    super(props);
    this.state={
      data:{},
      isLoading:true
    }
  }
  componentDidMount(){
    this.setState({
      data:this.props.data,
      isLoading:false
    })
  }
  handleEndMission=()=>{
    let nData = this.state.data;
    nData.date_fin = new Date().toJSON().slice(0,10).replace(/-/g,'/').split('/').reverse().join('/');
    nData.actif=false;
    Axios.put(`/${nData._id}`,nData)
    .then(res=>{
      window.location.reload();
    })
    .catch(e=>{
      alert(e)
    })
  }

  handlePauseMission=()=>{
    let nData = this.state.data;
    nData.actif=false;
    Axios.put(`/${nData._id}`,nData)
    .then(res=>{
      window.location.reload();
    })
    .catch(e=>{
      alert(e)
    })
  }
  render() {
    console.log(this.state)
    const { isLoading , data } = this.state
    const item =<Card className="text-center">
        <Card.Header>Poste Numéro: {this.props.posteID}</Card.Header>
        <Card.Body>
            <Card.Title>
                Mission : <strong> {data.commande} </strong> pour <strong>{this. state.data.client} </strong> </Card.Title>
            <Card.Text>
              Débuté le {this.state.data.date_debut}
            </Card.Text>
            <div className="space-around">
              <DangerButton text="Pause" handleClick={this.handlePauseMission} />
              <SuccessButton text="Terminer" handleClick={this.handleEndMission} />
            </div>
        </Card.Body>
        <Card.Footer className="text-muted">Type : {this.state.data.produit} </Card.Footer>
        <Card.Footer className="text-muted">Unitées : {this.state.data.commande} </Card.Footer>
    </Card>
    console.log(data)
    return (
      <div>
        {isLoading||data===false?<ActivityIndicator/>:item}
      </div>   
    )
  }
}
