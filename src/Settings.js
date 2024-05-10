import './Settings.css';

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

export default function Settings() {
  return (
    <div className='Settings'>
        <h1 class='Settings-header'>
          Settings
        </h1>
        <h3 class='Settings-header2'>
          Game Modes
        </h3>
        <SettingButton />
        <p>
        The attacker may launch the first attack with multiple cards of the same rank. Instead of attacking in order, any player may add on to the attack at any time.
        </p>
    </div>
  );
}
