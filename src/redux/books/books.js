const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const initialState = [
  // { title: 'If qal\'asi maxbusi', category: 'fiction', id: 0 },
  // { title: 'Qalb ko\'zgusidagi illatlar', category: 'religious', id: 1 },
  // { title: 'Stive Jobs', category: 'development', id: 2 },
  // { title: 'If qal\'asi maxbusi', category: 'fiction', id: 0 },
  // { title: 'Qalb ko\'zgusidagi illatlar', category: 'religious', id: 1 },
  // { title: 'Stive Jobs', category: 'development', id: 2 },
  // { title: 'If qal\'asi maxbusi', category: 'fiction', id: 0 },
  // { title: 'Qalb ko\'zgusidagi illatlar', category: 'religious', id: 1 },
  // { title: 'Stive Jobs', category: 'development', id: 2 },
];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

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
