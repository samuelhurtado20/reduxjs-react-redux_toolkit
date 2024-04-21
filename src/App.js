import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { User } from './features/user/User';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <User />
      </div>
    </div>
  );
}

export default App;
