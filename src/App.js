import React from 'react';
import Core from './components/core';
import './App.sass';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo">
          Xmas Planner
        </div>
        <button>Account</button>
      </header>
      <Core></Core>
    </div>
  );
}

export default App;
