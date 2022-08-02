import './App.css';
import Nav from './Nav/Nav';
import Name from './Namesake/Namesake';
import About from './Pages/About';
import Work from './Pages/Work';

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Name />
      <About />
      <Work />
    </div>
  );
}
