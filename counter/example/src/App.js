import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import IButton from './IButton';
import DButton from './DButton';
import Counter from './Counter';
import TextBox from './TextBox';

// Context lets us pass a value deep into the component tree
// without explicitly threading it through every component.
// Create a context for the current theme (with "light" as the default).
const ThemeContext = React.createContext('light');

class App extends React.Component {
  render() {
    return (
      <ThemeContext.Provider value="RED">
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}

// A component in the middle doesn't have to
// pass the theme down explicitly anymore.
function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

class ThemedButton extends Component {
  // Assign a contextType to read the current theme context.
  // React will find the closest theme Provider above and use its value.
  // In this example, the current theme is "dark".
  static contextType = ThemeContext;
  render() {
    return <button>{this.context}</button>;
  }
}

/*class App extends Component{
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
}*/

export default App;
