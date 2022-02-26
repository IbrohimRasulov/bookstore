/* eslint-disable react/jsx-key */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookItem from './BookItem';
import Form from './Form';
import { getBooksFromAPI } from '../redux/books/books';

const Booklist = () => {
  const books = useSelector((store) => store.booksReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooksFromAPI());
  }, [dispatch]);

  return (
    <div className="main-content">
      <div className="content-align booklist">
        {books.map((book) => (
          <BookItem
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            category={book.category}
          />
        ))}
      </div>
      <Form />
    </div>
  );
};

export default Booklist;
