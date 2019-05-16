import React from 'react'

export default function DeleteButton(props) {
  return (
    <button  disabled={props.disabled?true:false} onClick={props.handleClick}>
        <i class="fas fa-trash-alt"></i>
    </button>
  )
}
