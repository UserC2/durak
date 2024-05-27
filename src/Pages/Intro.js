import './Intro.css'
import Settings from './Settings'
import {Button} from '@mui/material'

export default function Intro(setPage) {
  return (
    <div className="Intro">
      <h1>Durak</h1>
      <Button
        variant="contained"
        onClick={() => {
          setPage(Settings(setPage))
        }}
      >
        Start
      </Button>
    </div>
  );
}
