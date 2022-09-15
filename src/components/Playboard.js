import React, { useEffect, useState } from 'react'
import Pieces from './Pieces'
import PlayerIcon from './PlayerIcon'

export default function Playboard({ theme, players, size }) {
    const [guessedNumbers, setGuessedNumbers] = useState([]);
    const [playerOne, setPlayerOne] = useState({active: false, points: 0});
    const [playerTwo, setPlayerTwo] = useState({active: false, points: 0});
    const [playerThree, setPlayerThree] = useState({active: true, points: 0});
    const [playerFour, setPlayerFour] = useState({active: false, points: 0});
    const [choices, setChoices] = useState(0);
    const [currentMatch, setCurrentMatch] = useState(-1)
    const [currentNumbers, setCurrentNumbers] = useState([])

    const handleChoices = (num) => {
        if (currentMatch === -1) setCurrentMatch(num)
        else if (currentMatch === num) {
            setGuessedNumbers(prevGuessedNumbers => [...prevGuessedNumbers, num])
        }
        
    }
    let numberMatch = []
    useEffect(() => {
        let random = (size * size / 2)
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

    numberMatch = [...numberMatch, ...numberMatch]
    numberMatch = shuffle(numberMatch)
    setCurrentNumbers(numberMatch)
    }, [])

    const boardStyle = {
        display: "grid",
        gridTemplateColumns: `repeat(${size}, 1fr)`,
        gridTemplateRows: `repeat(${size}, 4fr)`,
        columnGap: '15px',
        rowGap: '15px',

    }
  return (
    <>
    <div className='flex justify-between px-24'>
        <p className='text-2xl text-darkBlue font-bold' >memory</p>
        <div className='flex space-x-6'>
            <button className='bg-gold text-white rounded-full py-2 px-4 w-28 hover:bg-lightGold' >Restart</button>
            <button className='bg-mediumGray text-darkBlue rounded-full py-2 px-4 w-28 hover:bg-lightBlue hover:text-white' >New Game</button>
        </div>

    </div>
    <div className='w-1/2 mx-auto my-16' style={boardStyle}>
        {currentNumbers.map(number => <Pieces number={number} players={players} theme={theme} handleChoices={handleChoices} guessedNumbers={guessedNumbers} />) }     
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
