import './App.css';
import Intro from './Pages/Intro';
import {useState} from 'react'

var runOnce = true

export default function App() {
  const [page, setPage] = useState((<div>hi there</div>))

  if (runOnce) {
    // setup the first page (setPage must be passed to Intro so this can't go in 'useState()')
    setPage(Intro(setPage))
    runOnce = false
  }

  return (
    <div className="App">
      <head>
        <title>Durak</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      {page}
    </div>
  );
}