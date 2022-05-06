import Front from './pages/Front'
import './App.css';
import Order from './pages/Order';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter >
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Front />} />
        <Route exact path='/order' element={<Order />} />
      </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
