import { Component } from 'react';

class CardList extends Component {
  render() {
    console.log('card-list');
    const { monsters } = this.props;

    return monsters.map((monster) => <h1 key={monster.id}>{monster.name}</h1>);
  }
}

export default CardList;
