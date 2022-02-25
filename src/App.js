/* eslint-disable react/jsx-key */
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// ? Components
import Navbar from './components/Navbar';
import Booklist from './components/Booklist';
import Categories from './components/Categories';

const App = () => (
  <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Booklist />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </div>
  </Router>
);

export default App;
