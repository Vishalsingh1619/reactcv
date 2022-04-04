import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  HashRouter,
} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <HashRouter>
      <Header />
      <Home />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </HashRouter>
  );
}

export default App;
