import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IBooks } from '../types/IBooks';
import { IBook } from '../types/IBook';

interface ISearch {
  search: string;
  page: number;
}

const bookApi = createApi({
  reducerPath: 'bookApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.itbook.store/1.0/' }),
  endpoints: (builder) => ({
    getCertainBooks: builder.query<IBooks, ISearch>({
      query: (request: ISearch) => `search/${request.search}/${request.page}`,
    }),
    getOneBook: builder.query<IBook, string>({
      query: (isbn: string) => `https://api.itbook.store/1.0/books/${isbn}`,
    }),
  }),
});

export default bookApi;
export const { useGetCertainBooksQuery, useGetOneBookQuery } = bookApi;
