
import './App.css';
import Header from './components/shared/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cards from './pages/Cards';
import DeckBuilder from './pages/DeckBuilder';
import Decks from './pages/Decks';


function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <Header />
        <div style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cards" element={<Cards />} />
            <Route path="/deck-builder" element={<DeckBuilder />} />
            <Route path="/decks" element={<Decks />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
