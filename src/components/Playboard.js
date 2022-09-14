import React, { useEffect, useState } from 'react'
import Pieces from './Pieces'

export default function Playboard({ theme, players, size }) {
    const [guessedNumbers, setGuessedNumbers] = useState([])
    let random = (size * size / 2)
    // let numbers = Array.from({length: random}, () => Math.floor(Math.random() * random));
    // console.log(numbers)
    let numberMatch = []
    useEffect(() => {
        for (let i=0; i < random; i++) numberMatch[i] = i;

    function shuffle(array) {
        let tmp, current, top = array.length;
        if(top) while(--top) {
            current = Math.floor(Math.random() * (top + 1));
            tmp = array[current];
            array[current] = array[top];
            array[top] = tmp;
        }
        return array;
    }

    numberMatch = shuffle(numberMatch);
    setGuessedNumbers([...numberMatch])

    console.log(numberMatch)
    })

    const boardStyle = {
        display: "grid",
        gridTemplateColumns: `repeat(${size}, 1fr)`,
        gridTemplateRows: `repeat(${size}, 4fr)`,
        columnGap: '10px',
        rowGap: '10px',

    }
  return (
    <div className='w-1/2 mx-auto' style={boardStyle}>
        {numberMatch.map(number => <Pieces key={number} guessedNumbers={guessedNumbers}/>)}
        {numberMatch.map(number => <Pieces key={number * 2} guessedNumbers={guessedNumbers}/>)}
    </div>
    
  )
}
