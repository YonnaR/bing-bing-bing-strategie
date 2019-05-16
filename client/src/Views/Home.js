import React from 'react'
import AllMissionList from '../Components/All-Missions-List/AllMissionList';
import Recap from '../Components/Recap/Recap';
import ActiveMissionsList from '../Components/Active-Missions-List/ActiveMissionsList';
export default function Home() {
  return (
      <div>
        <ActiveMissionsList/> 
        <AllMissionList/> 
      </div>
  )
}


