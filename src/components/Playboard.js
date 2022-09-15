import React, { useEffect, useState } from 'react'
import Pieces from './Pieces'
import PlayerIcon from './PlayerIcon'

export default function Playboard({ theme, players, size }) {
    const [guessedNumbers, setGuessedNumbers] = useState([]);
    const [playerOne, setPlayerOne] = useState({active: false, points: 0});
    const [playerTwo, setPlayerTwo] = useState({active: false, points: 0});
    const [playerThree, setPlayerThree] = useState({active: true, points: 0});
    const [playerFour, setPlayerFour] = useState({active: false, points: 0});


    let random = (size * size / 2)
    // let numbers = Array.from({length: random}, () => Math.floor(Math.random() * random));
    // console.log(numbers)
    let numberMatch = []
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

    console.log(numberMatch)

    const boardStyle = {
        display: "grid",
        gridTemplateColumns: `repeat(${size}, 1fr)`,
        gridTemplateRows: `repeat(${size}, 4fr)`,
        columnGap: '10px',
        rowGap: '10px',

    }
  return (
    <>
    <div className='w-1/2 mx-auto' style={boardStyle}>
        {numberMatch.map(number => <Pieces number={number} players={players} theme={theme} />) }
        {numberMatch.map(number => <Pieces number={number} players={players} theme={theme} />) }        
    </div>
    <div className='flex w-full justify-between mt-16 px-24'>
        <PlayerIcon number={1} points={playerOne.points} active={playerOne.active} />
        <PlayerIcon number={2} points={playerTwo.points} active={playerTwo.active} />
        <PlayerIcon number={3} points={playerThree.points} active={playerThree.active} />
        <PlayerIcon number={4} points={playerFour.points} active={playerFour.active} />
    </div>
    </>
    
  )
}
