import { Component } from 'react';

import './card-container.style.css';

class CardContainer extends Component {
  render() {
    const { id, name, email, className } = this.props;

    return (
      <div className={`card-container ${className}`}>
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

export default CardContainer;
