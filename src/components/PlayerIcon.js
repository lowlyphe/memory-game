import React from 'react'

export default function PlayerIcon({ number, points, active }) {
  return (
    <div className='flex flex-col space-y-4'>
    <div style={{backgroundColor: active ? '#fda214' : '#bcced9',   }} className='flex bg-mediumGray justify-between items-center rounded-md p-2 px-4 w-48'>
        <p style={{color: active ? '#fff' : "#7191a5"}}>Player {number}</p>
        <p style={{color: active ? '#fff' : "#152938"}} className='text-2xl'>{points}</p>
    </div>
    <p className='text-darkBlue'>CURRENT TURN</p>
    </div>
  )
}
