import React, { useEffect, useState, useCallback } from 'react';
import classes from './booksPage.module.scss';

import BookList from '../../components/bookList/BookList';
import SearchForm from '../../components/searchForm/SearchForm';
import Pagination from '../../components/pagination/Pagination';

import { useGetCertainBooksQuery } from '../../services/bookService';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import IBookItem from '../../types/IBookItem';

const BooksPage: React.FC = () => {
  const search = useTypedSelector((state) => state.search);
  const page = useTypedSelector((state) => state.page);

  const { data, error, isLoading } = useGetCertainBooksQuery({
    search,
    page,
  });

  return (
    <div className={classes.wrapper}>
      <SearchForm />
      <BookList data={data} />
      <Pagination />
    </div>
  );
};

export default BooksPage;
