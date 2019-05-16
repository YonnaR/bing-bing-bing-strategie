import React from 'react'
import PosteApplication from '../Components/Poste-Application/PosteApplication';


export default function Poste({match}) {
  return (
    <div>
      <PosteApplication posteID={match.params.id}/>
    </div>
  );
}
