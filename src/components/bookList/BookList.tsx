import React from 'react';
import classes from './bookList.module.scss';
import BookItem from '../bookItem/BookItem';
import { nanoid } from '@reduxjs/toolkit';
import { IBooks } from '../../types/IBooks';
import IBookItem from '../../types/IBookItem';

interface IBookList {
  data: IBooks | undefined;
}

const BookList: React.FC<IBookList> = (props) => {
  const books = props.data?.books as IBookItem[];

  const bookElems = books?.map((book) => {
    return <BookItem key={nanoid()} book={book} />;
  });

  return <div className={classes.bookList}>{bookElems}</div>;
};

export default BookList;
