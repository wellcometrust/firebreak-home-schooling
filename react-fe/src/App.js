import React, { useContext } from 'react';
import AdminContext from './components/AdminContext/AdminContext';

import './assets/app.scss';

function App() {
  const { isAdminActive, toggleAdmin } = useContext(AdminContext);

  const handleClick = (e) => {
    toggleAdmin(!isAdminActive);
  }

  return (
    <div className="App">
      <header className="App-header">
        <button type="button" onClick={handleClick}>{isAdminActive ? 'deactivate admin': 'activate admin'}</button>
      </header>
    </div>
  );
}

export default App;
