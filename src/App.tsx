
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cards from './pages/Cards';
import DeckBuilder from './pages/DeckBuilder';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/deck-builder" element={<DeckBuilder />} />
      </Routes>
    </Router>
  );
}

export default App;
