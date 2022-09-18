import React from 'react';
import classes from './searchForm.module.scss';
import { setSearch } from '../../store/slices/searchSlice';
import { setPage } from '../../store/slices/pageSlice';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';

const SearchForm: React.FC = () => {
  const dispatch = useDispatch();
  const search = useTypedSelector((state) => state.search);

  const changeSearch = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    dispatch(setSearch(target.value));
    dispatch(setPage(1));
  };

  return (
    <div className={classes.formWrapper}>
      <form className={classes.form}>
        <input
          className={classes.search}
          value={search}
          onChange={changeSearch}
          placeholder="&#128269;"
        />
      </form>
    </div>
  );
};

export default React.memo(SearchForm);
