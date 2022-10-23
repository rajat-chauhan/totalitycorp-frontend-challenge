import {Routes, Route} from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import HomePage from './pages/HomePage';

function App() {
  return (
     <Routes>
      <Route path='/' element = { <Login /> } />
      <Route path='/home' element = { <HomePage /> } />
     </Routes>
  );
}

export default App;
