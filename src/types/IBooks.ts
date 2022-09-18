import IBookItem from './IBookItem';

export interface IBooks {
  total: string;
  page: string;
  books: IBookItem[];
}
