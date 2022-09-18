import { useEffect, useState } from 'react';
import classes from './bookInfo.module.scss';
import bookApi, { useGetOneBookQuery } from '../../services/bookService';
import { IBook } from '../../types/IBook';
import { useParams } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import StarRating from '../../components/UI/starRating/StarRating';
import { nanoid } from '@reduxjs/toolkit';

const BookInfo = () => {
  const { isbn } = useParams();
  const { data, error, isLoading } = useGetOneBookQuery(isbn as string);
  // console.log('hi');

  const pdf = [];
  for (let link in data?.pdf) {
    const elem = (
      <a key={nanoid()} href={data?.pdf[link]} className={classes.pdf}>
        PDF
      </a>
    );
    pdf.push(elem);
  }

  return (
    <div className={classes.bookPage}>
      <main className={classes.bookInfo}>
        <div className={classes.infoTop}>
          <div className={classes.image}>
            <img src={data?.image} alt="bookPicture" />
          </div>
          <div className={classes.info}>
            <h2 className={classes.title}>{data?.title}</h2>
            <h4 className={classes.subtitle}>{data?.subtitle}</h4>
            <div className={classes.authors}>
              <span>Authors:</span> {data?.authors}
            </div>
            <div className={classes.publisher}>
              <span>Publisher: </span>
              {data?.publisher}
            </div>
            <div className={classes.isbn}>
              <span>ISBN13: </span>
              {data?.isbn13}
            </div>
            <div className={classes.pages}>
              <span>Pages:</span> {data?.pages}
            </div>
            <div className={classes.year}>
              <span>Year: </span>
              {data?.year}
            </div>
            <div className={classes.rating}>
              <span>Rating: </span>
              <StarRating rating={data?.rating} />
            </div>
          </div>
        </div>

        <div className={classes.description}>
          <p>{data?.desc}</p>
          {data?.pdf && (
            <div className={classes.introPages}>
              <span>Pages from the book :</span>
              <div className={classes.links}>{pdf}</div>
            </div>
          )}
        </div>
      </main>

      <div className={classes.favorites}>
        <div className={classes.price}>{data?.price}</div>
        <button>Add to favorites</button>
      </div>
    </div>
  );
};

export default BookInfo;
