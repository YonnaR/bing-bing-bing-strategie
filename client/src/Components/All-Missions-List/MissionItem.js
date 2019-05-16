import React, { Component } from 'react'
import Axios from 'axios';

import AssignButton from '../Buttons/Assign-Button/AssignButton';
import DeleteButton from '../Buttons/Delete-Button/DeleteButton';
import UpdateButton from '../Buttons/Update-Button/UpdateButton';
import ArchiveButton from '../Buttons/Archive-Button/ArchiveButton';

import AssignMissionModal from '../Modals/Assign-Mission-Modal/AssignMissionModal';
import MissionOptionModal from '../Modals/Mission-Option-Modal/MissionOptionModal';
import ArchiveMissionModal from '../Modals/Archive-Mission-Modal/ArchiveMissionModal';
import ValidationModal from '../Modals/Validation-Modal/ValidationModal';


export default class MissionItem extends Component {
  constructor(props){
    super(props);
    this.state={
      data:[],
      modalDelete:false,
      modalOption:false,
      modalAssign:false,
      modalArchive:false
    }
  }

  componentDidMount(){
    this.setState({
      data:this.props.data
    })
  }
  /* 
  handleShowDelete show modal
  */
  handleShowDelete=()=>{
    this.setState(state=>{
      return {modalDelete : !state.modalDelete}
    })
  }

  handleShowAssign=()=>{
    this.setState(state=>{
      return {modalAssign : !state.modalAssign}
    })
  } 

  handleShowOption=()=>{
    this.setState(state=>{
      return {modalOption : !state.modalOption}
    })
  } 

  handleShowArchive=()=>{
    this.setState(state=>{
      return {modalArchive : !state.modalArchive}
    })
  }


  /* 
    handle delete make the request for delete mission's by id
  */
  handleDelete=(id)=>{
    Axios.delete(`/${id}`)
    .catch((e)=>{
      alert("  erreur : "+ e)
    })
    .then((res)=>{
      console.log(res)
      window.location.reload();
    })
    
  }

  handleAssign=(id)=>{
    Axios.put(`/commande/${id}`)
    .catch((e)=>{
      console.log(e)
    })
    .then((res)=>{
      console.log(res)
    })
  }


  handleOption=()=>{

  }
  render() {
    const { data, modalAssign, modalOption, modalDelete , modalArchive } = this.state
    const bg = ()=>{
      if(data.date_fin !== undefined){
        return ["green",true]
      }else if(data.date_debut !== undefined){
        return ["orange",true]
      }else{
        return ["red",false]
      }
    }
    return (
      <tr style={{backgroundColor:bg()[0]}}>
        <td className="text-center">{data.client}</td>
        <td className="text-center">{data.commande}</td>
        <td className="text-center">{data.type}</td>
        <td className="text-center">{data.unite}</td>
        <td className="text-center">{data.date_crea}</td>
        <td className="text-center">{data.poste!==undefined?data.poste:"Non Attribué"}</td>

        <td>
          <div className="space-around center">
            <AssignButton disabled={bg()[1]} handleClick={this.handleShowAssign}/>
          </div>
        </td>
        <td>
            <div className="space-around no-wrap">
                <UpdateButton handleClick={this.handleShowOption}/>
                <ArchiveButton handleClick={this.handleShowArchive} />
                <DeleteButton handleClick={this.handleShowDelete}/>
            </div>
        </td>
        {modalDelete?<ValidationModal 
          title={`Suppression de la mission ${data.commande}`}
          show={true} 
          text="Êtes vous sur de vouloir supprimer la mission?"
          handleClose={this.handleShowDelete}
          handleConfirm={()=>this.handleDelete(data._id)}  
        />:null}
        {modalAssign?<AssignMissionModal
          title={`Assigner la mission ${data.commande}`}
          show={true} 
          handleClose={this.handleShowAssign}
          data={data}
        />:null}
        {modalArchive?<ArchiveMissionModal
          title={`Archiver la mission ${data.commande}`}
          show={true} 
          handleClose={this.handleShowArchive}
          data={data}
        />:null}
        {modalOption?<MissionOptionModal
          title={`Option pour ${data.commande}`}
          show={true} 
          handleClose={this.handleShowOption}
          handleConfirm={()=>this.handleAssign(data._id)}  
        />:null}
      </tr>
    )
  }
}

