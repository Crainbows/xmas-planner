import React from 'react';
import Core from './components/core';
// import './App.sass';
import AppTopBar from './components/AppTopBar';

function App() {
  return (
    <div className="bp3-dark">
      <AppTopBar></AppTopBar>
      <Core></Core>
    </div>
  );
}

export default App;
