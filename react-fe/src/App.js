import React, { useContext, useState } from 'react';
import PinInput from 'react-pin-input';

import AdminContext from './components/AdminContext/AdminContext';

import './assets/app.scss';

function App() {
  let pinEl = null;
  const [pin, setPin] = useState('');

  const { adminPIN, isAdminActive, setAdminPIN, setAdminActive } = useContext(AdminContext);

  const handleClick = (e) => {
    setAdminActive(!isAdminActive);
  }

  const checkPIN = value => {
    if (isAdminActive) {
      setAdminPIN(value)
    } else {

    }
  }

  const handleChange = value => {
    setPin(value);
  }

  const handleComplete = () => {

  }

  const handleSave = () => {

  }

  const handleUnlock = () => {
    setAdminActive(true)
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
