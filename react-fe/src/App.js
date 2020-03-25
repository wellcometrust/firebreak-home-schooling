import React, { useContext } from 'react';
import PIN from './components/PIN/PIN';
import MainView from './components/Views/main';

import './assets/app.scss';

function App() {

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
