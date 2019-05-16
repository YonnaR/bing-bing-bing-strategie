import React from 'react'
import ColorItem from './ColorItem';

export default function LegendItem(props) {
  return (
    <div>
        <ColorItem color={props.data.color}/>
        <span>{props.data.title}</span>
    </div>
  )
}
