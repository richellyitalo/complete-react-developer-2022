import { useState } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState('a');
  
  const onSearchChange = (event) => setSearchField(event.target.value);

  return (
    <div className="App">
      <h1 className="app-title">
        Monster Rolodex <small>by Rich</small>
      </h1>

      <SearchBox
        className="search-box-monster"
        placeholder="search monster"
        onChangeHandler={onSearchChange}
      />
      
        {/* {filteredMonsters.length > 0 && (
          <CardList monsters={filteredMonsters} />
        )} */}
    </div>
  );

  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/users/')
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((users) =>
  //       this.setState(
  //         () => {
  //           return { monsters: users };
  //         },
  //         () => {
  //           // return console.log(this.state.monsters);
  //         }
  //       )
  //     );
  // }

  // changeTheName() {
  //   // way one
  //   // most straightly
  //   // this.setState({name: {firstName: 'Italo', lastName: 'Rich'}});
  //   // way two
  //   // just change directly the index using old value
  //   // this.setState(state => ({name: state.name + state.name}))
  //   // way three
  //   // return the final object after conditions
  //   // this.setState(state => {
  //   //   console.log('change');
  //   //   let name = state.name === 'Richelly' ? 'Italo' : 'Richelly';
  //   //   let age = state.age < 30 ? state.age + 1 : 18;
  //   //   return {name, age};
  //   // });
  //   // way four
  //   // with callback
  //   // this.setState(
  //   //   () => {
  //   //     return {
  //   //       name: {
  //   //         firstName: 'John',
  //   //         lastName: 'Doo',
  //   //       },
  //   //     };
  //   //   },
  //   //   () => {
  //   //     // show the updated state
  //   //     console.log(this.state);
  //   //   }
  //   // );
  // }

  // onSearchChange = (event) => {
  //   this.setState({ searchTerm: event.target.value });
  // };

  // render() {
  //   const { monsters, searchTerm } = this.state;
  //   const { onSearchChange } = this;

  //   const filteredMonsters = monsters.filter(
  //     (monster) =>
  //       searchTerm.length === 0 ||
  //       monster.name.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
};

export default App;
