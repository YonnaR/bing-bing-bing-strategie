import React from 'react';


export default function AssignButton(props) {
  return (
    <button disabled={props.disabled?true:false} onClick={props.handleClick}>
        <i class="fas fa-arrow-right"></i>
    </button>
  )
}
