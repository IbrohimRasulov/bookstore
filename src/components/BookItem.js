/* eslint-disable react/jsx-key */
import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBookFromAPI } from '../redux/books/books';

const BookItem = (props) => {
  const {
    id,
    author,
    title,
    category,
  } = props;
  const dispatch = useDispatch();

  return (
    <div className="book-item" key={id}>
      <div className="content">
        <h4>{category}</h4>
        <h3>{title}</h3>
        <h5>{author}</h5>
        <div className="book-buttons">
          <button type="button">Comments</button>
          <span>|</span>
          <button type="button" onClick={() => dispatch(removeBookFromAPI(id))}>Remove</button>
          <span>|</span>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="progress">
        <div className="spinner">
          <div className="spin" />
          <div className="percent">
            <h2>75%</h2>
            <p>Completed</p>
          </div>
        </div>
        <div className="chapter">
          <h4>CURRENT CHAPTER</h4>
          <p>Chapter 17</p>
          <button type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
};

BookItem.propTypes = {
  category: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default BookItem;
