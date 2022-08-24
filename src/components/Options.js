import React from 'react'

export default function () {
  return (
    <div className='flex flex-col bg-white text-mediumBlue mx-auto w-80 rounded-lg p-4 space-y-3'>
        <p className='mr-auto text-xs'>Select Theme</p>
        <div className='flex justify-between'>
            <button className='bg-mediumGray focus:bg-darkBlue hover:bg-lightBlue w-32 text-white rounded-full'>Numbers</button>
            <button className='bg-mediumGray focus:bg-darkBlue hover:bg-lightBlue w-32 text-white rounded-full'>Icons</button>
        </div>
        <p className='mr-auto text-xs'>Number of Players</p>
        <div className='flex justify-between'>
            <button className='bg-mediumGray focus:bg-darkBlue hover:bg-lightBlue w-16 text-white rounded-full'>1</button>
            <button className='bg-mediumGray focus:bg-darkBlue hover:bg-lightBlue w-16 text-white rounded-full'>2</button>
            <button className='bg-mediumGray focus:bg-darkBlue hover:bg-lightBlue w-16 text-white rounded-full'>3</button>
            <button className='bg-mediumGray focus:bg-darkBlue hover:bg-lightBlue w-16 text-white rounded-full'>4</button>
        </div>
        <p className='mr-auto text-xs'>Grid Size</p>
        <div className='flex justify-between mb-3'>
            <button className='bg-mediumGray focus:bg-darkBlue hover:bg-lightBlue w-32 text-white rounded-full'>4x4</button>
            <button className='bg-mediumGray focus:bg-darkBlue hover:bg-lightBlue w-32 text-white rounded-full'>6x6</button>
        </div>
        <div className='justify-center'>
            <button className='bg-gold hover:bg-lightGold w-full text-white rounded-full'>Start Game</button>
        </div>
        

    </div>
  )
}
