// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home/Home';
import Stats from './pages/Stats/Stats';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-gray-800">
        <nav className="bg-white shadow-md p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Book Self Manager</h1>
          <div className="space-x-4">
            <Link to="/" className="text-blue-600 hover:underline">Home</Link>
            <Link to="/stats" className="text-blue-600 hover:underline">Stats</Link>
          </div>
        </nav>

        <main className="p-6 max-w-4xl mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stats" element={<Stats />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
