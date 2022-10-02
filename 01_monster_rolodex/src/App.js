import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: 'Richelly',
      age: 18
    };

    this.changeTheName = this.changeTheName.bind(this)
  }

  changeTheName() {
    // way one
    this.setState({ name: 'Italo', age: this.state.age + 2 })

    // way two
    // this.setState(state => ({name: state.name + state.name}))
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hi My name is {this.state.name}.</p>
          <p>And I have {this.state.age} years old.</p>
          <button onClick={this.changeTheName}>
            Change the Name!
          </button>
        </header>
      </div>
    );
  }
}

export default App;
