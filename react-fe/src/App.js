import React, { useContext } from 'react';
import AdminContext from './components/AdminContext/AdminContext';
import PIN from './components/PIN/PIN';
import MainView from './components/Views/main';

import './assets/app.scss';

function App() {
  const { isAdminActive } = useContext(AdminContext);
  {/* TODO: add contextual class to App to show when in admin mode */}

  return (
    <div className="App">
      <header className="App-header">
        <PIN />
      </header>
      <MainView />
    </div>
  );
}

export default App;
