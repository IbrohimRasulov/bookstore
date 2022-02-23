import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// ? Components
import Navbar from './components/Navbar';
import Books from './components/Books';
import Categories from './components/Categories';
import Form from './components/Form';

const App = () => (
  <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
      <Form />
    </div>
  </Router>
);

export default App;
