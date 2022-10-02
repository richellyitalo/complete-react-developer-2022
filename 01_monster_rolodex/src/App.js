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
    // most straightly
    // this.setState({name: 'Italo'});

    // way two
    // just change directly the index using old value
    // this.setState(state => ({name: state.name + state.name}))

    // way three
    // return the final object after conditions
    this.setState(state => {
      let name = state.name === 'Richelly' ? 'Italo' : 'Richelly';
      let age = state.age < 30 ? state.age + 1 : 18;
            
      return {name, age};
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hi My name is {this.state.name}.</p>
          <p>And I have {this.state.age} years old.</p>
          <button onClick={() => this.changeTheName()}>
            Change the Name!
          </button>
        </header>
      </div>
    );
  }
}

export default App;
