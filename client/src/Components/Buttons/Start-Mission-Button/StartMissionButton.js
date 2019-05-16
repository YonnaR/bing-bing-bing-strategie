import React, { Component } from 'react'
import Axios from 'axios';

export default class StartMissionButton extends Component {
    handleStartMission=()=>{
        let nData = this.props.data;
        nData.actif = true;
        Axios.put(`/${nData._id}`,nData)
        .then(res=>{
            window.location.reload()
        }).catch(e=>{
            alert(e)
        })
    }
  render() {
    return (
        <button disabled={this.props.disabled?true:false} onClick={this.handleStartMission}>
            <i class="far fa-play-circle"></i>
        </button>
    )
  }
}
