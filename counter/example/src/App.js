import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import IButton from './IButton';
import DButton from './DButton';
import Counter from './Counter';
import TextBox from './TextBox';

class App extends Component{
  constructor(){
    super();
    //initial state of counter
    this.state={
      count:0
    }
  }
  handleIncrementClick=()=>{
    console.log("Clicked");
    this.setState({count:this.state.count+1});
  }
  handleDecrementClick=()=>{
    console.log("Clicked");
    this.setState({count:this.state.count-1});
  }
  render(){
    return (
      <div className="App">
        <TextBox />
        <br />
        <Counter count={this.state.count}/>
        <IButton IncrementClickButton={this.handleIncrementClick}/>
        <IButton IncrementClickButton={this.handleDecrementClick}/>
      </div>
    );
  }
}

export default App;
