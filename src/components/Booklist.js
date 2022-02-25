import React from 'react';
import { useSelector } from 'react-redux';
import BookItem from './BookItem';
import Form from './Form';

const Booklist = () => {
  const books = useSelector((store) => store.booksReducer);

  return (
    <div className="booklist">
      {books.map((book) => (
        <BookItem
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
          category={book.category}
        />
      ))}
      <Form />
    </div>
  );
};

export default Booklist;
