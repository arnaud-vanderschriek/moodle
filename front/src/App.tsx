import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' Component={LoginForm} />
          <Route path='/home' Component={Home} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
