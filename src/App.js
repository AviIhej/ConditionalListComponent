import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {

  state = {
    userInput: '' 
  }

  inputChangedHandler = (event) => {
    this.setState({userInput: event.target.value});
  }

  deleteCharHandler = ( index ) => {
    // Now text is an array of characters
    const text = this.state.userInput.split('');
    //Here we delete/remove one character at the index positon, and only one character
    text.splice(index,1)
    // converts array of characters in to a string again
    const updatedText = text.join('');
    this.setState({userInput: updatedText});



  }

  // Here we must use the map of spread operator to render the char
  //  cpmponet for each character in the character list

  // Split method converts this string into an array of strings after every character
  render() {
    const charList = this.state.userInput.split('').map((ch, index) => {
      // We want to return a jsx representation
      // Now we basically have a new array of char components
      // We have stored the contents of the UserInput array into 
      // A variable whta we call charlist, and map each individua
      // to this new array.
      return <Char 
      character = {ch} 
      key={index} 
      clicked={() => this.deleteCharHandler(index)}/>
    })
    return (
      <div className="App">
        <h1>Test App 3</h1>
        <input type="text" onChange={this.inputChangedHandler.bind(this.state.userInput)}/>
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length}/>
        {/* Self closing tags for components */}
        
        {charList}
        
        
      </div>
    );
  }
}

export default App;
