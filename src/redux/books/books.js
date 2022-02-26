import axios from 'axios';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_FROM_API = 'bookStore/books/GET_FROM_API';
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

export const getBooks = (payload) => ({
  type: GET_FROM_API,
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

export const removeBookFromAPI = (id) => async (dispatch) => {
  dispatch(removeBook(id));
  await axios.delete(`${API}/${id}`);
};

export const getBooksFromAPI = () => async (dispatch) => {
  const response = await axios.get(API);

  const books = Object.entries(response.data).map(([id, arr]) => {
    const { title, category } = arr[0];
    const { realTitle, realAuthor } = JSON.parse(title);
    return {
      id,
      title: realTitle,
      author: realAuthor,
      category,
    };
  });

  dispatch(getBooks(books));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    case GET_FROM_API:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
