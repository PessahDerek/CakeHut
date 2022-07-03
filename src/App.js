import Front from './pages/Front'
import './App.css';
import {Routes, Route } from 'react-router-dom';
import Order from './pages/Order';

function App() {
  return (
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Front />} />
          <Route exact path="/order" element={<Order />} />
        </Routes>
      </div>
    
  );
}

export default App;
