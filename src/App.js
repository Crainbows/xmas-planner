import React from 'react';
import Core from './components/core';
import './App.sass';
import AppTopBar from './components/AppTopBar';
import {useSelector} from 'react-redux';

function App() {
  let theme = useSelector(state => state.darkmode) ? "bp3-dark" : "bp3-light";
  return (
    <div className={"app " + theme}>
      <AppTopBar></AppTopBar>
      <Core></Core>
    </div>
  );
}

export default App;
