import './search-box.style.css';

const SearchBox = ({ onChangeHandler, className, placeholder }) => (
  <input
    type="search"
    className={`search-box ${className}`}
    placeholder={placeholder}
    autoFocus={true}
    onChange={onChangeHandler}
  />
);

export default SearchBox;
