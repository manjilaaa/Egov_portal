import logo from './logo.svg';
import './App.css';
import Register from './components/Register';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import FetchPan from './components/FetchPan';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/fetch' element={<FetchPan/>} />
      </Routes>
    </Router>
  );
}

export default App;
