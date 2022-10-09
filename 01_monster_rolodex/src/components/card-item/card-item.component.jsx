import './card-item.style.css';

// const CardItem = ({ className, monster: { id, name, email } }) => {
const CardItem = ({ className, monster }) => {
  const { id, name, email } = monster;

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
};

export default CardItem;
