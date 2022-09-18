import { nanoid } from '@reduxjs/toolkit';
import React from 'react';
import classes from './pagination.module.scss';
import { setPage } from '../../store/slices/pageSlice';
import { useGetCertainBooksQuery } from '../../services/bookService';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { usePagination, DOTS } from '../../hooks/usePagination';
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const Pagination: React.FC = () => {
  const dispatch = useDispatch();

  const search = useTypedSelector((state) => state.search);
  const page = useTypedSelector((state) => state.page);
  const total = useGetCertainBooksQuery({ search, page }).data?.total as string;
  const pagesCount = Math.ceil(+total / 10);

  const pagination = usePagination(+total, page, 1) as [];

  if (pagination?.length < 2 || !pagination) return null;

  const paginationElems = pagination?.map((elem) => {
    if (elem === DOTS)
      return (
        <div key={nanoid()} className={classes.paginationDots}>
          &#8230;
        </div>
      );
    return (
      <div
        key={nanoid()}
        style={{ padding: '4px' }}
        className={`${classes.paginationElem} ${
          page === elem ? classes.active : ''
        }`}
        onClick={(e) => dispatch(setPage(elem))}
      >
        {elem}
      </div>
    );
  });

  return (
    <div className={classes.pagination}>
      <IconContext.Provider value={{ className: classes.arrowIcon }}>
        <div
          className={classes.arrowLeft}
          onClick={() => dispatch(setPage(Math.max(page - 1, 1)))}
        >
          <FaArrowLeft />
        </div>
      </IconContext.Provider>

      {paginationElems}

      <IconContext.Provider value={{ className: classes.arrowIcon }}>
        <div
          className={classes.arrowRight}
          onClick={() => dispatch(setPage(Math.min(page + 1, pagesCount)))}
        >
          <FaArrowRight />
        </div>
      </IconContext.Provider>
    </div>
  );
};

export default React.memo(Pagination);
