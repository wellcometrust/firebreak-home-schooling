import React, { useContext, useEffect, useState } from 'react';
import PinInput from 'react-pin-input';
import classnames from 'classnames';

import AdminContext from '../AdminContext/AdminContext';

const PIN_LENGTH = 4;

function PIN() {
  const [pin, setPin] = useState('');
  let pinEl = null;

  const { adminPIN, isAdminActive, setAdminPIN, setAdminActive } = useContext(AdminContext);
  
  const pinClasses = classnames('pin-manager', { 'is-admin': isAdminActive });
  
  useEffect(() => {
    const storedPIN = localStorage.getItem('adminPIN');

    if (localStorage && storedPIN) {
      setAdminPIN(storedPIN);
    }

    return () => {}
  }, [])

  const checkPINLength = value => 
    value.length === PIN_LENGTH;
  

  const handleChange = value => {
    setPin(value);
  }

  const handleComplete = () => {}

  const handleSave = () => {
    if (checkPINLength(pin)) {
      setAdminPIN(pin);
      localStorage.setItem('adminPIN', pin);
      handleClear();
    }
  }

  const handleUnlock = () => {
    if (pin === adminPIN) {
      setAdminActive(true);
      setIsPINActive(false);
      handleClear();
    }
  }
  
  const handleLock = () => {
    setAdminActive(false);
    setIsPINActive(true);
    handleClear();
  }

  const handleClear = () => {
    setPin('');
    if (pinEl) pinEl.clear();
  }

  const [isPINActive, setIsPINActive] = useState(true)

  return (
    <div className={pinClasses}>
      {!adminPIN.length && <p>PIN not set</p>}
      {isAdminActive && <p>Admin mode active</p>}

      {isPINActive && <PinInput 
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
        />}
      {!adminPIN.length && <button type="button" onClick={handleSave}>Save</button>}
      {!!adminPIN.length && !isAdminActive && <button type="button" onClick={handleUnlock}>Unlock</button>}
      {isPINActive && <button type="button" onClick={handleClear}>Clear</button>}
      {isAdminActive && <button type="button" onClick={handleLock}>Lock</button>}
    </div>
  );
}

export default PIN;
