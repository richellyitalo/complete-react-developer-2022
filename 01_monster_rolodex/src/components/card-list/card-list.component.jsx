import CardItem from '../card-item/card-item.component';

import './card-list.style.css';

const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((monster) => {
      return <CardItem monster={monster} />;
    })}
  </div>
);

export default CardList;
