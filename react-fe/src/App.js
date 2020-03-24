import React, { useContext, useState } from 'react';
import PinInput from 'react-pin-input';

import AdminContext from './components/AdminContext/AdminContext';

import './assets/app.scss';

const PIN_LENGTH = 4;

function App() {
  let pinEl = null;
  const [pin, setPin] = useState('');

  const { adminPIN, isAdminActive, setAdminPIN, setAdminActive } = useContext(AdminContext);

  const checkPINLength = value => 
    value.length === PIN_LENGTH;
  

  const handleChange = value => {
    setPin(value);
  }

  const handleComplete = () => {}

  const handleSave = () => {
    if (isAdminActive && checkPINLength(pin)) {
      setAdminPIN(pin)
      handleClear();
    }
  }

  const handleUnlock = () => {
    if (pin === adminPIN) {
      setAdminActive(true)
    }
  }

  const handleLock = () => {
    setAdminActive(!isAdminActive);
    handleClear();
  }

  const handleClear = () => {
    setPin('');
    pinEl.clear();
  }
    
  return (
    <div className="App">
      <header className="App-header">
        {!adminPIN.length && <p>PIN not set</p>}
        {isAdminActive && <button type="button" onClick={handleLock}>Lock</button>}
        
      </header>
      <main>
        <PinInput 
          focus
          length={PIN_LENGTH} 
          initialValue=""
          ref={p => (pinEl = p)}
          secret 
          type="numeric" 
          inputStyle={{borderColor: 'red'}}
          inputFocusStyle={{borderColor: 'blue'}}
          onChange={handleChange}
          onComplete={handleComplete}
        />
        {isAdminActive ? (
          <button type="button" onClick={handleSave}>Save</button>
        ) : (
          <button type="button" onClick={handleUnlock}>Unlock</button>
        )}
        <button type="button" onClick={handleClear}>Clear</button>
      </main>
    </div>
  );
}

export default App;
