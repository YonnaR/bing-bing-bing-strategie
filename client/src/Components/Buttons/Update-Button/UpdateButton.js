import React from 'react'

export default function UpdateButton(props) {
  return (
    <button disabled={props.disabled?true:false} onClick={props.handleClick}>
        <i class="fas fa-cog"></i>
    </button>
  )
}
