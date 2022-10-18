const Person = (props) => {
//   props.children && console.log(props.children);
  return React.createElement('div', {}, [
    React.createElement('h2', { style: { marginBottom: 0 } }, props.name),
    React.createElement('p', {}, `${props.age} years olds`),
    props.children && props.children,
  ]);
};

const InfoHighlight = (props) => {
  const style = {
    border: '1px solid tomato',
    borderRadius: '2px',
    display: 'inline',
    padding: '5px 15px',
  };
  return React.createElement('pre', { style }, props.children);
};

const App = () => {
  document.title = 'React is LOADED';
  return React.createElement('div', {}, [
    React.createElement('h1', { className: 'app-title' }, 'React IS rendered.'),
    React.createElement(Person, { name: 'Rich', age: 45 }),
    React.createElement(
      Person,
      { name: 'Italo', age: 20 },
      React.createElement(InfoHighlight, {}, 'Master Piece')
    ),
  ]);
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
