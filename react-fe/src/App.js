import React, { useContext } from 'react';
import logo from './logo.svg';
import AdminContext from './components/AdminContext/AdminContext';

import './App.css';

function App() {
  const { isAdminActive, toggleAdmin } = useContext(AdminContext);

  const handleClick = (e) => {
    toggleAdmin(!isAdminActive);
  }

  return (
    <div className="App">
      <header className="App-header">
        <button type="button" onClick={handleClick}>{isAdminActive ? 'deactivate admin': 'activate admin'}</button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
