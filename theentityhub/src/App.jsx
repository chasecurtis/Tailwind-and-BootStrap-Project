import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Killers from './pages/Killers';
import Survivors from './pages/Survivors'
import LoadoutBuilder from './pages/LoadoutBuilder';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar />
      <main className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/killers" element={<Killers />} />
          <Route path="/survivors" element={<Survivors />} />
          <Route path="/builder" element={<LoadoutBuilder />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
