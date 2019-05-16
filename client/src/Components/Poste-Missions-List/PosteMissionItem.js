import React from 'react'
import AssignButton from '../Buttons/Assign-Button/AssignButton';
import DeleteButton from '../Buttons/Delete-Button/DeleteButton';
import UpdateButton from '../Buttons/Update-Button/UpdateButton';
import StartMissionButton from '../Buttons/Start-Mission-Button/StartMissionButton';

export default function PosteMissionItem(props) {
  return (
    <tr>
        <td className="text-center">{props.data.client}</td>
        <td className="text-center">{props.data.commande}</td>
        <td className="text-center">{props.data.type}</td>
        <td className="text-center">{props.data.produit}</td>
        <td className="text-center">{props.data.unite}</td>
        <td className="text-center">{props.data.unite}</td>
        <td className="text-center">{props.data.date_debut}</td>
        <td>
            <div className="space-around">
                <StartMissionButton data={props.data}/>
            </div>
        </td>
    </tr>
  )
}
