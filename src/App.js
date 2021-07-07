import React, { Component } from 'react';
import './App.css';
import Logo from './Logo';
import Container from './Formcontainer/Container';

class App extends Component{
  render(){
    return(
      <div className="App">
        <Logo/>
        <Container/>
      </div>
    )
  }
}

export default App;
