import React, { Component } from 'react';
import PosteCurrentMission from '../Poste-Current-Mission/PosteCurrentMission';
import PosteMissionList from '../Poste-Missions-List/PosteMissionsList';
import Axios from 'axios';
import ActivityIndicator from '../Activity-Indicator/ActivityIndicator';
import NoData from '../No-Data/NoData';
import { isObject, isUndefined } from 'util';


export default class PosteApplication extends Component {
    
    constructor(props){
        super(props);
        this.state={
            isLoading:true,
            posteID:window.location.hash.split('/')[2],
            data:[]
        }
    }

    componentDidMount(){
        Axios.get(`/poste/${this.state.posteID}`)
        .catch(e=>{alert(e)})
        .then((res)=>{
            this.setState({
                data:res.data,
                isLoading:false
            })
        })
    }    
    getActif=()=>{
        for (let index = 0; index < this.state.data.length; index++) {
            const element = this.state.data[index];
            if(element.actif===true){
                return element
            }
            
        }
        return false

    }
    render() {
    const {data , isLoading , posteID} = this.state;
    let active=this.getActif();
    const app = 
            <div>
                {<PosteCurrentMission data={active} posteID={posteID}/>}
                <PosteMissionList isDisable={!active?false:true} data={data}/>
            </div>
    return (
        <div>
            {isLoading?<ActivityIndicator/>:app}
        </div>
    )
    }
}
