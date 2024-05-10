import './App.css';
import Settings from './Settings';
import {Button} from '@mui/material'

export default function App() {
  return (
    <div className="App">
      <head>
        <title>Durak</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <Title/ >
      <Settings/ >
    </div>
  );
}

function Title() {
  return (
    <div className="TitleScreen">
      <h1>Durak</h1>
      <Button variant="contained">Start</Button>
    </div>
  );
}
