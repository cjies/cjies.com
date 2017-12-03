import React, { Component } from 'react';
import styled from 'styled-components'; 
import logo from './logo.svg';
import './App.css';

const Button = styled.button`
  color:#fff;
  background-color: ${({ dark }) => dark ? '#aaa' : '#000'};
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button dark>asd</Button>
        <Button>asds</Button>
      </div>
    );
  }
}

export default App;
