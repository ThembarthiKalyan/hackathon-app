import logo from './logo.svg';
import './App.css';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import HomePage from './components/Homepage/Homepage';
import NewChallenge from './components/NewChallenge/NewChallenge';

function App() {
  return (
    <Router>
        <Routes>
            <Route exact path='/' element={<HomePage/>}/>
            <Route exact path='/challenge' element={<NewChallenge/>}/>
        </Routes>
    </Router>
  );
}

export default App;
