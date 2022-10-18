import { Routes, Route, Link } from 'react-router-dom';
import Home from './routes/home/home.component';

const Other = () => <h3>Other</h3>;

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default App;
