import './App.css';
import Nav from './Nav/Nav';
import Name from './Namesake/Namesake';
import About from './Pages/About';


export default function App() {
  return (
    <div className="App">
      <Nav />
      <Name />
      <About />
    </div>
  );
}
