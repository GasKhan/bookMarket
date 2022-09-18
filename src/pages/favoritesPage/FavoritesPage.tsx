import React from 'react';
import BookList from '../../components/bookList/BookList';
import { useGetCertainBooksQuery } from '../../services/bookService';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import IBookItem from '../../types/IBookItem';

export const FavoritesPage = () => {
  const search = useTypedSelector((state) => state.search);
  const page = useTypedSelector((state) => state.page);

  const { data, error, isLoading } = useGetCertainBooksQuery({
    search,
    page,
  });

  return (
    <div>
      <BookList data={data} />
    </div>
  );
};
