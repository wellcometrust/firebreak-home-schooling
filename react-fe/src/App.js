import React, { useContext, useState } from 'react';
import PinInput from 'react-pin-input';

import AdminContext from './components/AdminContext/AdminContext';

import './assets/app.scss';

function App() {
  let pinEl = null;
  const [pin, setPin] = useState([]);

  const { adminPIN, isAdminActive, setAdminPIN, toggleAdmin } = useContext(AdminContext);

  const handleClick = (e) => {
    toggleAdmin(!isAdminActive);
  }

  const checkPIN = value => {
    if (!adminPIN.length) {
      setAdminPIN(value.split(''))
    } else {

    }
  }

  const handleChange = value => {
    console.log(typeof value)
    setPin(value)
  }

  const handleComplete = () => {

  }

  const handleSave = () => {

  }

  const handleUnlock = () => {

  }

  const handleClear = () => {
    setPin('');
    pinEl.clear();
  }
    
  return (
    <div className="App">
      <header className="App-header">
        {!adminPIN.length && <p>PIN not set</p>}
        {isAdminActive && <button type="button" onClick={handleClick}>Lock</button>}
        
      </header>
      <main>
        <PinInput 
          focus
          length={4} 
          initialValue=""
          ref={p => (pinEl = p)}
          secret 
          type="numeric" 
          inputStyle={{borderColor: 'red'}}
          inputFocusStyle={{borderColor: 'blue'}}
          onChange={handleChange}
          onComplete={handleComplete}
        />
        <button type="button" onClick={handleSave}>Save</button>
        <button type="button" onClick={handleUnlock}>Unlock</button>
        <button type="button" onClick={handleClear}>Clear</button>
      </main>
    </div>
  );
}

export default App;
