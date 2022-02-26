/* eslint-disable */
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOKS_SUCCESS = 'bookStore/books/GET_BOOKS_SUCCESS';
const API = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/JXZQElqX1QSDiXQuZWJw/books';

const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const getBooks = (payload) => ({
  type: GET_BOOKS_SUCCESS,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
      case GET_BOOKS_SUCCESS:
      return ([...action.payload]);
    default:
      return state;
  }
};

export default reducer;

export const getBooksFromAPI = () => async (dispatch) => {
  const response = await fetch(API);
  const bookData = await response.json();
  const books = Object.entries(bookData).map(([key, value]) => ({
    item_id: key,
    title: {
      title: value[0].title.title,
      author: value[0].title.author,
    },
    category: value[0].category,
  }));
  dispatch(getBooks(books));
};

export const removeBookFromAPI = (id) => async (dispatch) => {
  dispatch(removeBook(id));
  await fetch(`${API}/${id}`, {
    method: 'DELETE',
    body: JSON.stringify({ item_id: id }),
    headers: { 'Content-type': 'application/JSON' },
  });
};

export const addBookToAPI = (payload) => async (dispatch) => {
  dispatch(addBook(payload));
  await fetch(API, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: { 'Content-type': 'application/JSON' },
  });
};
