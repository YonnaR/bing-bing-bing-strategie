import React, { Component } from 'react'
import LegendItem from './LegendItem';

export default class LegendList extends Component {

  constructor(props){
    super(props);
    this.state={
      isLoading:true,
      data:[]
    }
  }

  componentDidMount(){
    this.setState({
      isLoading:false,
      data:this.props.data
    })
  }

  render() {
    const { isLoading, data } = this.state
    const legend = isLoading?null:data.map((v , i)=>{
      return <LegendItem key={i} data={v} />
    })
    return (
      <div>
        {
          isLoading?null:legend
        }
      </div>
    )
  }
}
