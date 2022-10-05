import { Component } from 'react';

import './card-item.style.css';

class CardItem extends Component {
  render() {
    const { id, name, email, className } = this.props.monster;

    return (
      <div className={`card-container ${className}`} key={id}>
        <img
          src={`https://robohash.org/${id}?set=set1&size=180x180`}
          alt={name}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

export default CardItem;
