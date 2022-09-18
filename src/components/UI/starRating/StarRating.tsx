import React from 'react';
import classes from './starRating.module.scss';
import { FaStar } from 'react-icons/fa';
import { nanoid } from '@reduxjs/toolkit';

interface IRating {
  rating: string | undefined;
}

const StarRating: React.FC<IRating> = (props) => {
  const rating = +(props.rating as string);

  const stars = [...Array(5)].map((_, i) => {
    return (
      <FaStar
        key={nanoid()}
        size={30}
        color={rating > i ? '#FFDF00' : '#ccc'}
      />
    );
  });

  return <div>{stars}</div>;
};

export default StarRating;
