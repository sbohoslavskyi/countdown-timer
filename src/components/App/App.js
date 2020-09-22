import React from 'react';

import './App.css';
import CountdownTimer from "../CountdownTimer";
import Header from "../Header";
import Footer from "../Footer";

function App() {
  return (
    <div className="app">
      <Header title={'New Year 2021!'} />
      <main>
        <CountdownTimer />
      </main>
      <Footer />
    </div>
  );
}

export default App;
