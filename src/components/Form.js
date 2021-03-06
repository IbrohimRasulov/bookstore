/* eslint-disable react/jsx-key */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBookToAPI } from '../redux/books/books';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const submitBookToStore = () => {
    if (title && author && category) {
      const newBook = {
        id: uuidv4(),
        title,
        author,
        category,
      };

      dispatch(addBookToAPI(newBook));
      setTitle('');
      setAuthor('');
      setCategory('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitBookToStore(title, author);
  };

  return (
    <form>
      <div className="content-align">
        <h2>ADD NEW BOOK</h2>
        <div className="main-form">
          <input
            type="text"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <input
            type="text"
            placeholder="Author"
            onChange={(e) => setAuthor(e.target.value)}
            value={author}
          />
          <select
            name="categories"
            id="categories"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option hidden>Categories</option>
            <option value="Fiction">Fiction</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Romance">Romance</option>
            <option value="Development">Development</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="History">History</option>
            <option value="Religious">Religious</option>
            <option value="Adventure">Adventure</option>
            <option value="Health">Health</option>
          </select>
          <button type="submit" onClick={handleSubmit}>ADD BOOK</button>
        </div>
      </div>
    </form>
  );
};

export default Form;
