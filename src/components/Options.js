import React, { useState } from 'react'
import Playboard from './Playboard'

export default function () {

        const [theme, setTheme] = useState()
        const [players, setPlayers] = useState()
        const [size, setSize] = useState()
        const [start, setStart] = useState(false)

  if (!start) {
    return (
        <div className='bg-darkBlue'>
            <div className='flex flex-col bg-white text-mediumBlue mx-auto w-80 rounded-lg p-4 space-y-3'>
                <p className='mr-auto text-xs'>Select Theme</p>
                <div className='flex justify-between'>
                    <button onClick={() => setTheme("number")} className='bg-mediumGray focus:bg-darkBlue hover:bg-lightBlue w-32 text-white rounded-full'>Numbers</button>
                    <button onClick={() => setTheme("icon")} className='bg-mediumGray focus:bg-darkBlue hover:bg-lightBlue w-32 text-white rounded-full'>Icons</button>
                </div>
                <p className='mr-auto text-xs'>Number of Players</p>
                <div className='flex justify-between'>
                    <button onClick={() => setPlayers(1)} className='bg-mediumGray focus:bg-darkBlue hover:bg-lightBlue w-16 text-white rounded-full'>1</button>
                    <button onClick={() => setPlayers(2)} className='bg-mediumGray focus:bg-darkBlue hover:bg-lightBlue w-16 text-white rounded-full'>2</button>
                    <button onClick={() => setPlayers(3)} className='bg-mediumGray focus:bg-darkBlue hover:bg-lightBlue w-16 text-white rounded-full'>3</button>
                    <button onClick={() => setPlayers(4)} className='bg-mediumGray focus:bg-darkBlue hover:bg-lightBlue w-16 text-white rounded-full'>4</button>
                </div>
                <p className='mr-auto text-xs'>Grid Size</p>
                <div className='flex justify-between mb-3'>
                    <button onClick={() => setSize(4)} className='bg-mediumGray focus:bg-darkBlue hover:bg-lightBlue w-32 text-white rounded-full'>4x4</button>
                    <button onClick={() => setSize(6)} className='bg-mediumGray focus:bg-darkBlue hover:bg-lightBlue w-32 text-white rounded-full'>6x6</button>
                </div>
                <div className='justify-center'>
                    <button onClick={() => setStart(true)} className='bg-gold hover:bg-lightGold w-full text-white rounded-full'>Start Game</button>
                </div>

        
            </div>
        </div>
      )
  }
  return (
    <Playboard theme={theme} players={players} size={size} />
  )
}
