import './App.css';
import Nav from './Nav/Nav';
// import Name from './Namesake/Namesake';
import { 
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';


export default function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path='/' />
        </Routes>
      </Router>
    </div>
  );
}
