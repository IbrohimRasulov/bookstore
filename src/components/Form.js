import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const submitBookToStore = (title, author) => {
    const newBook = {
      id: uuidv4(),
      title,
      author,
      category,
    };

    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
    setCategory('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitBookToStore(title, author);
  };

  return (
    <form>
      <h2>ADD NEW BOOK</h2>
      <div className="main-form">
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          required
        />
        <input
          type="text"
          placeholder="Author"
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
          required
        />
        <select name="categories" id="categories" onChange={(e) => setCategory(e.target.value)}>
          <option value="" selected disabled hidden>Categories</option>
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
    </form>
  );
};

export default Form;
