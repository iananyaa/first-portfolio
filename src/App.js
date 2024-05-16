import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Projects from './components/Projects';


function App() {
  return (
    <main>
      <h1>First Portfolio</h1>
      <Navbar />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
