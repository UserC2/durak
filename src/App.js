import './App.css';

function SettingButton() {
  let value = false;
  let active = 'Settings-button-off';
  value ? active = 'Settings-button-on' : active = 'Settings-button-on';
  function handleClick(){
    if (value === false){
      value = true;
    } 
    else{
      value = false;
    }
  }
  return( // make the button be red when off and green when on
    <button class={active} onclick={handleClick}>
      Siege Durak
    </button>
  );
}

function Settings() {
  return (
    <div className='Settings'>
        <h1 class='Settings-header'>
          Settings
        </h1>
        <h2 class='Settings-header2'>
          Game Modes
        </h2>
        <h3 class='Settings-header3'>Siege Durak <input type='checkbox' id='siegeDurak'></input></h3>  
        <p>
        The attacker may launch the first attack with multiple cards of the same rank. Instead of attacking in order, any player may add on to the attack at any time.
        </p>
    </div>
  );
}

function App() {
  return (
    <div className='App'>
      <Settings/ >
    </div>
  );
}

export default App;
