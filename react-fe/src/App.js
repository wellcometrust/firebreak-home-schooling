import React from 'react';
import PIN from './components/PIN/PIN';

import './assets/app.scss';
import MainView from './components/Views/main';

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
