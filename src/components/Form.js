import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('Author');
  const dispatch = useDispatch();

  const submitBookToStore = (title, author) => {
    const newBook = {
      id: uuidv4(),
      title,
      author,
    };

    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
  };

  return (
    <form>
      <h2>ADD NEW BOOK</h2>
      <div className="main-form">
        <input
          type="text"
          placeholder="Title"
          onChange={({ target }) => setTitle(target.value)}
          value={title}
        />
        <input
          type="text"
          placeholder="Author"
          onChange={({ target }) => setAuthor(target.value)}
          value={author}
        />
        <select name="categories" id="categories">
          <option value="null">Categories</option>
          <option value="fiction">Fiction</option>
          <option value="fantasy">Fantasy</option>
          <option value="romance">Romance</option>
          <option value="development">Development</option>
          <option value="scifi">Sci-Fi</option>
          <option value="history">History</option>
          <option value="religious">Religious</option>
          <option value="adventure">Adventure</option>
          <option value="health">Health</option>
        </select>
        <button type="submit" onSubmit={() => submitBookToStore(title, author)}>ADD BOOK</button>
      </div>
    </form>
  );
};

export default Form;
