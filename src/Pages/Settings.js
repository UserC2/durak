import './Settings.css';
import Intro from './Intro.js'
import {Button} from '@mui/material'

export default function Settings(setPage) {
  return (
    <div className='Settings'>
        <h1 className='Settings-header'>
          Settings
        </h1>
        <h2 className='Settings-header2'>
          Game Modes
        </h2>
        <h3 className='Settings-header3'>Siege Durak <input type='checkbox' id='siegeDurak'></input></h3>  
        <p>
        The attacker may launch the first attack with multiple cards of the same rank. Instead of attacking in order, any player may add on to the attack at any time.
        </p>
        <Button
          variant="contained"
          onClick={() => {
            setPage(Intro(setPage))
          }}
        >
          Back
        </Button>
    </div>
  );
}
