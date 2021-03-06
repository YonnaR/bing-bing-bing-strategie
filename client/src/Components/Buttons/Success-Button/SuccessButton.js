import React from 'react'

export default function SuccessButton(props) {
  return (
    <button disabled={props.disabled?true:false} className="btn btn-success" onClick={props.handleClick}>
        <h3 className="text-center">{props.text}</h3>
    </button>
  )
}
