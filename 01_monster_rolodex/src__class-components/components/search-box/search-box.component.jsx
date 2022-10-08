import { Component } from 'react';

import './search-box.style.css';
class SearchBox extends Component {
  render() {
    const { onChangeHandler, className, placeholder } = this.props;

    return (
      <input
        type="search"
        className={`search-box ${className}`}
        placeholder={placeholder}
        autoFocus={true}
        onChange={onChangeHandler}
      />
    );
  }
}


export default SearchBox;