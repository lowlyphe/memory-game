import React, { useState } from 'react'

export default function Pieces({ number, handleChoices, guessedNumbers }) {

  const [clicked, setClicked] = useState(false)
  

  const handleClick = () => {
    setClicked(true)
    handleChoices(number)
  }

  return (
    <button 
      onClick={() => handleClick()}  
      style={{backgroundColor: clicked ? '#fda214' : "#152938"}} 
      className='w-24 h-24 rounded-full text-white flex items-center justify-center'>
        <p style={{display: clicked ? 'inline' : 'none'}} className='text-3xl'>{number}</p>
    </button>
  )
}
