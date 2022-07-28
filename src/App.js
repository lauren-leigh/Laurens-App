import './App.css';
import Nav from './Nav/Nav';
import Name from './Namesake/Namesake';
import About from './Pages/About';
import Work from './Pages/Work';
import Contact from './Pages/Contact';


export default function App() {
  return (
    <div className="App">
      <Nav />
      <Name />
      <About />
      <Work />
      {/* <Contact /> */}
    </div>
  );
}
