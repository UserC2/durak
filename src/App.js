import './App.css';
import Intro from './Pages/Intro';
import Settings from './Pages/Settings';

export default function App() {
  return (
    <div className="App">
      <head>
        <title>Durak</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <Intro/ >
      <Settings/ >
    </div>
  );
}