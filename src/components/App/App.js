import React from 'react';

import './App.css';
import CountdownTimer from "../CountdownTimer";
import Header from "../Header";

function App() {
  return (
    <div className="app">
      <Header title={'New Year 2021!'} />
      <main>
        <CountdownTimer />
      </main>
    </div>
  );
}

export default App;
