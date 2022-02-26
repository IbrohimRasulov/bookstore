import axios from 'axios';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const API = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ENEJBCELxc1apDnqf6rp/books';

const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const addBookToAPI = (payload) => async (dispatch) => {
  const {
    id,
    title,
    author,
    category,
  } = payload;

  const stringWithTitleAndAuthor = JSON.stringify({
    realTitle: title,
    realAuthor: author,
  });

  const bookToAPI = {
    item_id: id,
    title: stringWithTitleAndAuthor,
    category,
  };

  dispatch(addBook(payload));
  await axios.post(API, bookToAPI);
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

export default reducer;
