import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {
  console.log('render');
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);

  const onSearchChange = (event) =>
    setSearchField(event.target.value.toLowerCase());

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/')
      .then((res) => res.json())
      .then((users) => setMonsters(users));
  }, []);

  const filteredMonsters = monsters.filter(
    (monster) =>
      searchField.length === 0 ||
      monster.name.toLowerCase().includes(searchField)
  );

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

      {filteredMonsters.length > 0 && <CardList monsters={filteredMonsters} />}
    </div>
  );
};

export default App;
