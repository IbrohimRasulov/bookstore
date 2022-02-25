import { useSelector } from 'react-redux';
import BookItem from './BookItem';
import Form from './Form';
import { selectBooks } from '../redux/books/books';

const Booklist = () => {
  const books = useSelector(selectBooks);

  return (
    <div className="booklist">
      {books.map((book) => (
        <BookItem
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.title}
          category="Category"
        />
      ))}
      <Form />
    </div>
  );
};

export default Booklist;
