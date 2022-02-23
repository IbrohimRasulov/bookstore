import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//? Components
import Navbar from './components/Navbar';
import BooksContainer from './components/BooksContainer';
import CategoriesContainer from './components/CategoriesContainer';
import Form from './components/Form';

const App = () => (
  <Router>
    <div className="App">
      <Navbar />
      {/* <div className="content">
        <Routes>
          <Route path="/books" element={<BooksContainer />} />
          <Route path="/categories" element={<CategoriesContainer />} />
        </Routes>
      </div> */}
      <Form />
    </div>
  </Router>
);

export default App;
