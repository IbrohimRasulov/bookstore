// Sample data
const arr = [
  { title: 'If qal\'asi maxbusi', category: 'fiction', id: 0 },
  { title: 'Qalb ko\'zgusidagi illatlar', category: 'religious', id: 1 },
  { title: 'Stive Jobs', category: 'development', id: 2 },
];

const BookItem = () => (
  arr.map((book) => (
    <div className="book-item" key={book.id}>
      <div className="content">
        <h4>{book.category}</h4>
        <h3>{book.title}</h3>
        <p>Author</p>
        <ul>
          <li>Comments</li>
          <li>Remove</li>
          <li>Edit</li>
        </ul>
      </div>
      <div className="progress">
        <div className="spinner">
          <div className="spin" />
          <div className="percent">
            <p>75%</p>
            <p>Completed</p>
          </div>
        </div>
        <div className="chapter">
          <p>CURRENT CHAPTER</p>
          <p>Chapter 17</p>
          <button type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  ))
);

export default BookItem;
