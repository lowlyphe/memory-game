import React from 'react'
import Options from './Options'

export default function Gameboard() {
  return (
    <div className='bg-darkBlue text-white w-screen h-screen'>
        <span className='my-4'>memory</span>
        <Options />
    </div>
  )
}
