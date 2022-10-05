import { Component } from 'react';

class SearchBox extends Component {
  render() {
    const { onChangeHandler, className, placeholder } = this.props;

    return (
      <input
        type="search"
        className={className}
        placeholder={placeholder}
        autoFocus={true}
        onChange={onChangeHandler}
      />
    );
  }
}


export default SearchBox;