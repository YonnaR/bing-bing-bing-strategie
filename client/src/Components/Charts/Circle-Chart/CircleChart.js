import React from 'react';
import PieChart from 'react-minimal-pie-chart';
import LegendList from './LegendList';


export default function CircleChart(props) {
  return (

    <div className="center column">
      <br/>
      <PieChart
        animate
        data={props.data}
        style={{maxWidth:"350px"}}
      />
      <br/>
      <LegendList data={props.data} />
    </div>
    
  )
}
