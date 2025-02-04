import logo from './logo.svg';
import './App.css';
import Register from './components/Register';
import NavBar from './NavBar/NavBar';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import FetchPan from './components/FetchPan';

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Register/>} />
        <Route path='/fetch' element={<FetchPan/>}></Route>
      </Routes>
    </Router>
    
  );
}

export default App;
